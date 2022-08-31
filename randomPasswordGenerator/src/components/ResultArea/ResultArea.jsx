import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { useApp } from '../../context'

export const ResultArea = () => {

  const { result } = useApp()

  return (
    <Flex w='30%' gap='20px' flexDir='column' borderRadius='10px' justify='center' align='left' p='20px' m='0 auto' mt='20px' border='2px solid #fff' color='#fff'>
      <Text>Bairro: {result.bairro}</Text>
      <Text>CEP: { result.cep }</Text>
      <Text>ddd: {result.ddd} </Text>
      <Text>Localidade: { result.localidade}</Text>
      <Text>Logradouro: { result.logradouro}</Text>
    </Flex>
  )
}