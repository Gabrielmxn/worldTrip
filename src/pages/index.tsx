import { Box, Flex, Grid, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import Link from "next/link";


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
        <Flex direction="column" h="100%" justify="center" ml={140}>
          <Heading w={426}  color="gray.100">5 Continentes, <Flex as="span" display="block">infinitas possibilidades</Flex></Heading>
          <Text w={524} color="gray.200" mt="4" fontSize={{base: '16px', md: '18px', lg: '20px'}}>Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Flex>
        <Image src="/Airplane.png" alt="Avião" mr="35" position="absolute" right={10} bottom={-10} />
      </Flex>

      <HStack spacing="32" justify="center" mt="32" pb={20} color="black" position="relative" _before={{
        content: `""`,
        position: "absolute",
        width: "90px",
        bottom: 0,
        right: "auto",
        left: "auto",
        height: "1px",
        bg: "#000000"
      }}>
        <TravelTypes text="vida nortuna" image="cocktail_1.png" alt="Terra"  />
        <TravelTypes text="praia" image="surf_1.png" alt="Praia"  />
        <TravelTypes text="moderno" image="building_1.png" alt="Moderno"  />
        <TravelTypes text="clássico" image="museum_1.png" alt="Clássico"  />
        <TravelTypes text="e mais..." image="earth.png" alt="e mais"  />
      </HStack>

      <Grid color='gray.700'  justifyContent="center" align="center" mt={12} fontSize={"6xl"}>
        <Text>Vamos nessa?</Text>
        <Text>Então escolha seu continente</Text>
      </Grid>


      <Swiper
       modules={[Navigation, Pagination, Scrollbar, A11y]}
      color="gray.700"
      spaceBetween={30}
      navigation
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    
    >
      <SwiperSlide>
        <Link href="continent/europa">
          <a>
            <Image src="continent.png" alt=""/>
            doawdaw
          </a>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <a href="">
          <Image src="continent.png" alt=""/>
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <Flex bgImage="continent.png"  bgRepeat="no-repeat">
            wadwdwa
        </Flex>

      </SwiperSlide>
      <SwiperSlide>
        <a href="">
          <Image src="continent.png" alt=""/>
        </a>
      </SwiperSlide>
    </Swiper>
     
    </>
  )
}

