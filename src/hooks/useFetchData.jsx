import { useEffect, useReducer, useRef } from 'react'
import axios from 'axios'

function useFetchData(url, options) {
  const cache = useRef({})

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef(false)

  const initialState = {
    error: null,
    data: [],
    isLoading: false,
  }

  // Keep state logic separated
  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true }
      case 'fetched':
        return { ...initialState, data: action.payload, isLoading: false }
      case 'error':
        return { ...initialState, error: action.payload, isLoading: false }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    // Do nothing if the url is not given
    if (!url) return

    cancelRequest.current = false

    const fetchData = async () => {
      dispatch({ type: 'loading' })

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: 'fetched', payload: cache.current[url].data.data })
        return
      }

      try {
        const response = await axios.get(url, options)
        // console.log(response);
        if (response.status !== 200) {
          throw new Error(response.statusText)
        }

        cache.current[url] = response
        // console.log(response);
        if (cancelRequest.current) return

        dispatch({ type: 'fetched', payload: response.data.data })
      } catch (error) {
        if (cancelRequest.current) return

        dispatch({ type: 'error', payload: error })
      }
    }

    fetchData()

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return state
}

export default useFetchData
