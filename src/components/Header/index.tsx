import { Flex, Image } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri'

interface HeaderProps {
  children?: React.ReactNode;
}
export function Header({children}: HeaderProps){
  return(
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      mt="4"
      align="center"
      justify="center"
      position="relative"
    >
       {children}
      <Image src="/Logo.png" alt="logo"/>
    </Flex>
  )
}