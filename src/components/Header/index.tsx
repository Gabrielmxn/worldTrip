import { Box, Flex, Image, Skeleton } from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { RiArrowLeftSLine } from 'react-icons/ri'


interface HeaderProps {
  children?: React.ReactNode;
  isLoaded?: boolean;
}
export function Header({children, isLoaded = false}: HeaderProps){

  const router = useRouter();

  console.log(router.asPath);
  return(
   
    <Flex
      as="header"
      maxW={1160}
      mx="auto"
      w="full"
      h="20"
      mt="4"
      alignItems="center"
      justifyContent="space-between"

    >
      <Flex>
        {router.asPath !== "/" ? children : ''}
      </Flex>
      <Skeleton isLoaded={isLoaded}>
        <Flex w={{base:"81px", lg:"184.38px"}}>
          <Image  src="/Logo.png" alt="logo"/>
        </Flex>
       </Skeleton>
       <Box>

       </Box>
    </Flex>
    
  )
}