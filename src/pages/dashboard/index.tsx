import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const dashboard = () => {
  return (
    <Flex flex={1} align='center' justify='center' bg='gray.800' height='100vh'>
      <Text fontSize='4xl' color='gray.50'>
        Dashboard
      </Text>
    </Flex>
  )
}

export default dashboard