import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface ImageBox {
  urlLink: string;
  image: string;
  title: string;
  text: string;
}
export function ImageBox({ urlLink, image, title, text} : ImageBox){
  return(
    <Link href={`continent/${urlLink}`}>
      <a>
        <Image  w="full" h={{sm: "250px", md:"initial", }} src={`image/carousel/${image}.jpg`} alt={title}/>
          <Box position="absolute" h="full" bg="#00000080" display="flex" justifyContent="center" alignItems="center" top="0" color="gray.50" left="0" right="0" mx="auto" my="auto">
            <Box >
              <Heading  as="h1"  fontSize={{base:"lg", lg:"5xl"}}>{title}</Heading>
              <Text fontWeight="bold" mt="2"  fontSize={{base:"md", lg:"2xl"}}>{text}</Text>
            </Box>
          </Box>
      </a>
    </Link>
  )
}