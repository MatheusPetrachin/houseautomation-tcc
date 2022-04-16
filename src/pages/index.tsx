import { Box, Button, Flex, Input, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const Home: NextPage = () => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const user = useSelector((state: RootState) => state.auth)

  useEffect((): void => {
    if (!user.username) {
      router.push('/')
    } else {
      router.push('/dashboard')
    }
  }, [user, router])


  const handleLogin = () => {
    console.log(login, password)
    router.push('/dashboard')
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        flex={1}
        align='center'
        justify='center'
        h='100vh'
        bg='gray.900'
      >
        <Box
          bg='gray.600'
          borderRadius={10}
          p={15}
          alignItems='center'
          justifyContent='center'
          maxW='20rem'
        >
          <Text fontSize='2xl' textAlign='center' color='gray.50'>
            LOGIN
          </Text>
          <Input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder='Login'
            mt='0.5rem'
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Senha'
            mt='0.5rem'
          />
          <Button
            onClick={handleLogin}
            colorScheme='blue'
            mt='0.5rem'
            w='100%'>
            Entrar
          </Button>
        </Box>
      </Flex>
    </div>
  )
}

export default Home
