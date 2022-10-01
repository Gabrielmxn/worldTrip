import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";


export function Carousel(){
  return(
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
            <Box position="absolute" top="36%" color="gray.50" left="0" right="0" mx="auto" my="auto">
              <Heading as="h1"  fontSize={{base:"lg", lg:"5xl"}}>Europa</Heading>
              <Text fontWeight="bold" mt="2"  fontSize={{base:"lg", lg:"2xl"}}>O continente mais antigo.</Text>
            </Box>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="continent/ásia">
          <a>
            <Image src="continent.png" alt=""/>
            <Box position="absolute" top="36%" color="gray.50" left="0" right="0" mx="auto" my="auto">
              <Heading  as="h1"  fontSize={{base:"lg", lg:"5xl"}}>Ásia</Heading>
              <Text fontWeight="bold" mt="2"  fontSize={{base:"lg", lg:"2xl"}}>O mais extenso territorialmente.</Text>
            </Box>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="continent/oceania">
          <a>
            <Image src="continent.png" alt=""/>
            <Box position="absolute" top="36%" color="gray.50" left="0" right="0" mx="auto" my="auto">
              <Heading  as="h1"  fontSize={{base:"lg", lg:"5xl"}}>Oceania</Heading>
              <Text fontWeight="bold" mt="2"  fontSize={{base:"lg", lg:"2xl"}}>Diversos territórios ultramarinos.</Text>
            </Box>
          </a>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
        <Link href="continent/áfrica">
          <a>
            <Image src="continent.png" alt=""/>
            <Box position="absolute" top="36%" color="gray.50" left="0" right="0" mx="auto" my="auto">
              <Heading  as="h1"  fontSize={{base:"lg", lg:"5xl"}}>África</Heading>
              <Text fontWeight="bold" mt="2"  fontSize={{base:"lg", lg:"2xl"}}>O terceiro maior continente do mundo.</Text>
            </Box>
          </a>
        </Link>
      </SwiperSlide>


      <SwiperSlide>
        <Link href="continent/américa-do-sul">
          <a>
            <Image src="continent.png" alt=""/>
            <Box position="absolute" top="36%" color="gray.50" left="0" right="0" mx="auto" my="auto">
              <Heading  as="h1"  fontSize={{base:"lg", lg:"5xl"}}>América do Sul</Heading>
              <Text fontWeight="bold" mt="2"  fontSize={{base:"lg", lg:"2xl"}}>Paisagens naturais muito diversas.</Text>
            </Box>
          </a>
        </Link>
      </SwiperSlide>


      <SwiperSlide>
        <Link href="continent/américa%20do%20norte">
          <a>
            <Image src="continent.png" alt=""/>
            <Box position="absolute" top="36%" color="gray.50" left="0" right="0" mx="auto" my="auto">
              <Heading  as="h1"  fontSize={{base:"lg", lg:"5xl"}}>América do Norte</Heading>
              <Text fontWeight="bold" mt="2"  fontSize={{base:"lg", lg:"2xl"}}>Continente de duas potências mundiais.</Text>
            </Box>
          </a>
        </Link>
      </SwiperSlide>



    </Swiper>
  )
}