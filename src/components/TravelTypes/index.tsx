import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
interface TravelTypesProps {
  image: string;
  alt?: string;
  text: string;
}
export function TravelTypes({text, image, alt = "sem título"}: TravelTypesProps) {
  const travelImg = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box display="grid" gap={{base: "1", lg:"6"}} textAlign="center" justifyContent="center" alignContent="center">
      {travelImg && <Image display={{base: "none", lg:"block"}} src={image} alt={alt} />}
      {!travelImg ?   <Text position="relative" lineHeight="1" fontSize="lg" _after={
        {
          content: `""`,
          width: "8px",
          height: "8px",
          borderRadius: "full",
          bg: "#FFBA08",
          position: "absolute",
          left: '-16px',
          bottom: 0,
        }
      }>{text}</Text>
    
      :  <Text lineHeight="1" fontSize="3xl">{text}</Text>}
    </Box>
  );
}