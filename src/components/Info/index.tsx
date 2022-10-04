import { Box, Grid, Text } from "@chakra-ui/react";

interface InfoProps{
  quant: number;
  title: string;
}
export function Info({quant, title}: InfoProps) {
  return (
    <Grid display="block" textAlign={{base: "left", lg:"center"}}>
      <Text fontSize={{base:"2xl", lg:"5xl"}} color="#FFBA08" fontWeight="semibold">{quant}</Text>
      <Text as="span" fontSize={{base:"lg", lg:"2xl"}}>{title}</Text>
    </Grid>
  )
}