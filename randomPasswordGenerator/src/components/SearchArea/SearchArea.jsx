import React from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { useApp } from '../../context'
import { formatCep } from '../helpers'
import {
  Flex,
  Button,
  Input
} from '@chakra-ui/react'

export const SearchArea = () => {

  const { inputValue, setInputValue, setResult } = useApp()

  const handleCep = (e) => {
    const cep = e.target.value
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        console.log(data)
        setResult(data)
      });
  }

  return (
    <Flex p='40px' w='80%' margin='0 auto' h='50px' justify='center' align='center'>
      <Input placeholder='__.___-___' w='200px' value={formatCep(inputValue)} color="#fff" onChange={e => setInputValue(e.target.value)}></Input>
      <Button onClick={handleCep} ml='10px'><Search2Icon/></Button>
    </Flex>
  )
}
