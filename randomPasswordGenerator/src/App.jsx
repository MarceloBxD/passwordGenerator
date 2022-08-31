import { SearchArea, ResultArea } from "./components"
import { Flex } from "@chakra-ui/react"
import { Header } from "./section"

export const App = () => {
  return (
    <Flex  bgGradient='linear(to-l, #000 , #333)' h='100vh' flexDir='column'>
      <Header />
      <SearchArea />
      <ResultArea/>
    </Flex>
  )
}