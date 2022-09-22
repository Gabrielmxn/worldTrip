import { Flex, Image } from '@chakra-ui/react'
export function Header(){
  return(
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      justify="center"
    >
      <Image src="/Logo.png" alt="logo"/>
    </Flex>
  )
}