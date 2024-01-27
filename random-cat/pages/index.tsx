import { NextPage, GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import styles from './index.module.css'

type Props = {
  initialImageUrl: string
}

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
  const [imageUrl, setImageUrl] = useState(initialImageUrl)
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   fetchImage().then((newImage) => {
  //     setImageUrl(newImage.url);
  //     setLoading(false);
  //   })
  // }, [])

  const handleClick = async () => {
    setLoading(true)
    const newImage = await fetchImage()
    setImageUrl(newImage.url)
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <button onClick={handleClick}>One more cat!</button>
      <div className={styles.frame}>
        <div>{loading || <img src={imageUrl} />}</div>
      </div>
    </div>
  )
}

export default IndexPage

export const SimpleButton: () => JSX.Element = () => {
  const [state, setState] = useState(false)
  const handleClick = () => {
    setState((prevState) => !prevState)
  }
  return <button onClick={handleClick}>{state ? 'ON' : 'OFF'}</button>
}

// サーバーサイドで実行する処理
export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage()
  return {
    props: {
      initialImageUrl: image.url,
    },
  }
}

type Image = {
  url: string
}

const fetchImage = async (): Promise<Image> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search')
  const images = await res.json()
  console.log(images)
  return images[0]
}

fetchImage().then((image) => {
  console.log(image.url)
})
