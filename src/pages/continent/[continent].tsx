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
  return (
    <>
      <Header>
        <Link href="/">
        
          <Icon
            color="#000000"
            as={RiArrowLeftSLine}
            position="absolute"
            left="40"
            top="0px"
            bottom="0"
            mt="auto"
            mb="auto"
            w={8}
            h={8}
            lineHeight="1"
            _hover={{
              cursor: "pointer"
            }}
          />
        </Link>
        
      </Header>
      <Flex position="relative" color="#000000" w="1440" h="500" bgImage="https://images.unsplash.com/photo-1566745609223-23bce7140997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80&h=500" bgColor="#000000">
        <Image filter="brightness(0.8)" src="https://images.unsplash.com/photo-1566745609223-23bce7140997?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80&h=500" bgColor="#000000" h="500"/>
        <Heading fontWeight="semibold" position="absolute" color="gray.50" bottom="59" left="140">{continents.name}</Heading>
      </Flex>
      <Grid as="section" maxW={1160} mx="auto" mb="10">
        <Flex mt="20" alignItems="center" justifyContent="space-between" color="gray.700">
          <Text w={500} fontSize={20} lineHeight="1.4" textAlign="justify">
           {continents.text}
          </Text>
          <Stack direction="row" gap="16" mr="4">
            <Info quant={continents.countrinng} title="países" />
            <Info quant={continents.language} title="línguas" />
            <Info quant={continents.City?.length} title="cidades +100" />
          </Stack>
        </Flex>

        <Heading color="gray.700" mt="20" mb="10">Cidades +100</Heading>
        <Flex gap={42} m="0" wrap="wrap" >
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
    </>
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
    const reponse = await fetch(`http://localhost:3333/continent/${continent}`);
    const data = await reponse.json();

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
