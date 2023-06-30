export default function getDateDifference(time) {
  const date = new Date()
  const currentDate = date.getTime()
  const newsDate = new Date(time)
  const newsTime = newsDate.getTime()
  const difference = currentDate - newsTime
  const days = Math.floor(difference / (1000 * 3600 * 24))
  const hours = Math.floor(difference / (1000 * 3600))
  const minutes = Math.floor(difference / (1000 * 60))
  const seconds = Math.floor(difference / 1000)
  if (days > 0) {
    return `${days} days ago`
  } else if (hours > 0) {
    return `${hours} hours ago`
  } else if (minutes > 0) {
    return `${minutes} minutes ago`
  } else {
    return `${seconds} seconds ago`
  }
}
