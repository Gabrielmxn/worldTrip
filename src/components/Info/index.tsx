import { Box, Grid, Skeleton, Text } from "@chakra-ui/react";

interface InfoProps{
  quant: number;
  title: string;
  isLoaded: boolean;
}
export function Info({quant, title, isLoaded}: InfoProps) {
  return (
    <Skeleton fadeDuration={1} isLoaded={isLoaded}>
      <Grid display="block" textAlign={{base: "left", lg:"center"}}>
        <Text fontSize={{base:"2xl", lg:"5xl"}} color="#FFBA08" fontWeight="semibold">{quant}</Text>
        <Text as="span" fontSize={{base:"lg", lg:"2xl"}}>{title}</Text>
      </Grid>
    </Skeleton>
  )
}