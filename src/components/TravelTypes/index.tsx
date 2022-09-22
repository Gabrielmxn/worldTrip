import { Box, Image, Text } from "@chakra-ui/react";
interface TravelTypesProps {
  image: string;
  alt?: string;
  text: string;
}
export function TravelTypes({text, image, alt = "sem título"}: TravelTypesProps) {
  return (
    <Box display="grid" gap={6} textAlign="center" alignContent="center">
      <Image src={image} alt={alt} />
      <Text>{text}</Text>
    </Box>
  );
}