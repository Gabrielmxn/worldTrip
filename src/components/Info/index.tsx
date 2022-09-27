import { Box, Text } from "@chakra-ui/react";

interface InfoProps{
  quant: number;
  title: string;
}
export function Info({quant, title}: InfoProps) {
  return (
    <Box textAlign="center">
      <Text fontSize="48" color="#FFBA08" fontWeight="semibold">{quant}</Text>
      <Text fontSize="24" lineHeight="0">{title}</Text>
    </Box>
  )
}