import React from 'react'
import { Search2Icon } from '@chakra-ui/icons'
import { useApp } from '../../context'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Flex,
  Button,
  Input,
} from '@chakra-ui/react'

export const SearchArea = () => {

  const { setResult }  = useApp()

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
      <Input onBlur={handleCep} type='text' maxLength='8' color="#fff" w='250px' placeholder='Insira seu cep'></Input>
      <Button ml='10px'><Search2Icon/></Button>
      
    </Flex>
  )
}
