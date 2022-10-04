import { Box, Flex, Grid, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
//import mirageJs from '../services/db';
import { useEffect, useState } from 'react';


export default function Home() {
  return(
    <>
      <Header />
      <Flex 
        w="100%"
        bg="gray.700"
        h={335}
        position="relative"
        bgImage="url('/Background.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        
      >
        <Flex direction="column" h="100%" justify="center" ml={{base:"4" , lg:"32"}}>
          <Heading maxW={426}  color="gray.100">5 Continentes, <Flex as="span" display="block">infinitas possibilidades</Flex></Heading>
          <Text maxW={524} color="gray.200" mt="4" fontSize={{base: '16px', md: '18px', lg: '20px'}}>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Flex>
        <Image display={{base: "none", lg: "block"}} src="/Airplane.png" alt="Avião" mr="35" position="absolute" right={10} bottom={-10} />
      </Flex>

      <Flex  gap={{base:"12", lg:"32"}} wrap="wrap" maxW={{base: 266, lg:"full"}} justify="center" align="center" mx="auto" mt="32" pb={20} color="black" position="relative" _before={{
        content: `""`,
        position: "absolute",
        width: "90px",
        bottom: 0,
        right: "0",
        left: "0",
        margin: "0 auto",
        
        textAlign: "center",
        height: "1px",
        bg: "#000000"
      }}>
        <TravelTypes text="vida nortuna" image="cocktail_1.png" alt="Terra"  />
        <TravelTypes text="praia" image="surf_1.png" alt="Praia"  />
        <TravelTypes text="moderno" image="building_1.png" alt="Moderno"  />
        <TravelTypes text="clássico" image="museum_1.png" alt="Clássico"  />
        <TravelTypes text="e mais..." image="earth.png" alt="e mais"  />
      </Flex>

      <Grid color='gray.700'  justifyContent="center" textAlign="center" mt={12} fontSize={{base:"xl", lg:"4xl"}}>
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Grid>

      <Carousel />
      
     
    </>
  )
}

