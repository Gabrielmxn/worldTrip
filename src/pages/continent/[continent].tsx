import { Box, Flex, Heading, Icon, Image, Stack, Text, Grid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Header } from "../../components/Header";
import { RiArrowLeftSLine } from "react-icons/ri";
import bannerImg from '../../assets/banner.png'
import { City } from "../../components/City";
import Link from "next/link";
import { Info } from "../../components/Info";
import { useEffect, useState } from "react";

interface ParamsProps extends ParsedUrlQuery {
  post: string;
}

interface propsType{
  continentData: ContinentProps;
}

interface cityProps {
  id: string;
  name: string;
  country: string;
  flag: string;
  banner: string;
  continentId: string;
}

interface ContinentProps{
  id: string;
  name: string;
  text: string
  countrinng: number;
  language: number;
  City: cityProps[];
}
export default function Continent({continentData}: propsType) {
  const [continents, setContinents] = useState<ContinentProps>({} as ContinentProps)
  useEffect(() => {
    setContinents({...continentData})
  }, [continentData])

  console.log(continents)

  function imageCityAleatory(){
    const index = Math.floor(Math.random() * continents.City?.length);
    console.log(continents.City?.[index].banner)
    return continents.City?.[index].banner;
  }
  return (
    <Flex w="full" direction="column">
      <Header >
        <Link href="/"> 
        
          <Icon
            color="#000000"
            as={RiArrowLeftSLine}
           mr="auto"
           
            w={8}
            h={8}
            lineHeight="1"
            _hover={{
              cursor: "pointer"
            }}
          
          />
        </Link>
        
      </Header>
      <Flex position="relative">
        <Image filter="brightness(0.8)" w="full" objectFit="cover" maxH="500px" src={`${imageCityAleatory()}`} alt={`${imageCityAleatory}.name`} bgColor="#000000" />
        <Heading  display="flex" alignItems="center" justifyContent="center"  position="absolute" right={{base: "0", lg:"auto"}} top={{base: "0", lg:"auto"}} bottom={{base: "0", lg:"59"}} left={{base: "0", lg:"140"}}  color="gray.50">
          <Text as="span" fontSize={{base: "2xl", lg:"5xl"}} fontWeight="semibold">
            {continents.name}
          </Text>
        </Heading>
      </Flex>
      <Grid as="section" mx={{base: "0", lg:"140"}} mb="10" textAlign="center">
        <Flex flexDirection={{base:"column", lg:"row"}} gap="8" mt="20" alignItems="center" justifyContent="space-between" color="gray.700">
          <Text fontSize={{base:"sm", lg:"2xl"}}  px={{base: '4', lg:"2xl"}} lineHeight="1.4" textAlign="justify">
           {continents.text}
          </Text>
          <Stack direction="row" gap={{base:"4", lg:"16"}} p={{base:'4', lg:"2xl"}}>
            <Info quant={continents.countrinng} title="países" />
            <Info quant={continents.language} title="línguas" />
            <Info quant={continents.City?.length} title="cidades +100" />
          </Stack>
        </Flex>

        <Heading color="gray.700" mt="20" mb="10" textAlign="initial" px={{base: '4', lg:"2xl"}}>Cidades +100</Heading>
        <Flex textAlign={{base:"center", lg:"initial"}} justifyContent={{base:"center", lg:"initial"}} alignItems={{base:"center", lg:"initial"}} flexDirection={{base:"column", lg:"row"}} gap={42} m="0" wrap="wrap" >
          {continents.City?.map((valueResponse) => {
            return(
              <City 
                key={valueResponse.id}
                imageUrl={valueResponse.banner}
                name={valueResponse.name}
                country={valueResponse.country}
                flag={valueResponse.flag}
              />
            )
          })}
        </Flex>
      </Grid>
    </Flex>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const continentNames = ["europa", "ásia", "américa do sul", "américa do norte", "oceania", "áfrica"]

  
  const { continent } = context.params as ParamsProps;
  const verificationContinent = continentNames.find(value => value === continent);

  if(verificationContinent){
    console.log(`${process.env.URL_API}continent/${continent}`)
    const response = await fetch(`${process.env.URL_API}continent/${continent}`);
    const data = await response.json();

    const continentData: propsType = {
      ...data,
      name: data.name[0].toUpperCase() + data.name.slice(1)
    }

    console.log(continentData)
    return {
      props: {
        continentData
      },
      revalidate: 1,
    };
  }
  const continentData = {

  }
  return {
    props: {
      continentData
    },
    revalidate: 1,
  };
  
};
