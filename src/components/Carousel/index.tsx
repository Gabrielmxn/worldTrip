import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { ImageBox } from "./ImageBox";


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
        <ImageBox 
          urlLink="europa" 
          image="londres"
          text="O continente mais antigo."
          title="Europa"
        />
      </SwiperSlide>

      <SwiperSlide>
        <ImageBox 
          urlLink="ásia" 
          image="xangai"
          text="O mais extenso territorialmente."
          title="Ásia"
        />
      </SwiperSlide>
      
      <SwiperSlide>
        <ImageBox 
          urlLink="oceania" 
          image="sydney"
          text="Diversos territórios ultramarinos."
          title="Oceania"
        />
      </SwiperSlide>

      <SwiperSlide>
        <ImageBox 
          urlLink="áfrica" 
          image="cairo"
          text="O terceiro maior continente do mundo."
          title="África"
        />
      </SwiperSlide>


      <SwiperSlide>
        <ImageBox 
          urlLink="américa do sul" 
          image="rio-de-janeiro"
          text="Paisagens naturais muito diversas."
          title="América do Sul"
        />
      </SwiperSlide>


      <SwiperSlide>
        <ImageBox 
          urlLink="américa do norte" 
          image="new-york"
          text="Continente de duas potências mundiais."
          title="América do Norte"
        />
      </SwiperSlide>



    </Swiper>
  )
}