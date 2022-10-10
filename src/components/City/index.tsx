import { Box, Flex, Image, Skeleton, Text } from "@chakra-ui/react";

interface CityProps {
  name: string;
  country: string;
  flag: string;
  imageUrl: string;
  isLoaded: boolean;
}

export function City({
  name,
  country,
  flag,
  imageUrl,
  isLoaded
}: CityProps) {
  return (
   
    <Skeleton isLoaded={isLoaded} maxW={256}  border="1px solid #FFBA0850" borderRadius="base">
      <Image borderTopRadius="base" src={imageUrl} alt="" />
      <Flex justifyContent="space-between" m="25">
        <Box>
          <Text fontSize="xl" fontWeight="semibold" color="gray.700">{name}</Text>
          <Text fontSize="md" fontWeight="medium" color="#999999">{country}</Text>
        </Box>
        <Image  src={flag} alt={country} />
      </Flex>
    </Skeleton>
  )
}