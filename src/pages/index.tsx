import type { NextPage } from 'next'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLight } from '../store/reducers/house'

const Home: NextPage = () => {
  const data = useSelector((state) => state)
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch(toggleLight('copa'))
  }
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>
      <p>{JSON.stringify(data)}</p>
      <button onClick={handleChange}>TOGGLE</button>
    </div>
  )
}

export default Home