import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CityProps {
  name: string;
  country: string;
  flag: string;
  imageUrl: string;
}

export function City({
  name,
  country,
  flag,
  imageUrl
}: CityProps) {
  return (
    <Box w={256} border="1px solid #FFBA0850" borderRadius="4">
      <Image src={imageUrl} alt="" />
      <Flex justifyContent="space-between" m="25">
        <Box>
          <Text fontSize="20" fontWeight="semibold" color="gray.700">{name}</Text>
          <Text fontSize="16" fontWeight="medium" color="#999999">{country}</Text>
        </Box>
        <Image src={flag} alt="frança" />
      </Flex>
    </Box>
  )
}