import React, { useEffect } from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const user = useSelector((state: RootState) => state.auth)
  const router = useRouter()

  useEffect(() => {
    if (!user.username) {
      router.push('/')
    }
  }, [router, user])


  return (
    <Flex flex={1} align='center' justify='center' bg='gray.900' height='100vh'>
      <Text fontSize='4xl' color='gray.50'>
        Dashboard {JSON.stringify(user.username)}
      </Text>
    </Flex>
  )
}

export default Dashboard