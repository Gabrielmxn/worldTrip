import { Box, Text } from "@chakra-ui/react";

interface InfoProps{
  quant: number;
  title: string;
}
export function Info({quant, title}: InfoProps) {
  return (
    <Box textAlign={{base: "left", lg:"center"}}>
      <Text fontSize={{base:"2xl", lg:"5xl"}} color="#FFBA08" fontWeight="semibold">{quant}</Text>
      <Text fontSize={{base:"lg", lg:"2xl"}}>{title}</Text>
    </Box>
  )
}