export default function getRandomImage(imagesArray) {
  return imagesArray[Math.floor(Math.random() * imagesArray.length)]
}
