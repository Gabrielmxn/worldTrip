import { Flex, Heading, Icon, Image, Stack, Text, Grid, Spinner, Skeleton } from "@chakra-ui/react";
import { ParsedUrlQuery } from "querystring";
import { Header } from "../../components/Header";
import { RiArrowLeftSLine } from "react-icons/ri";
import { City } from "../../components/City";
import Link from "next/link";
import { Info } from "../../components/Info";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { api } from "../../services/api";
import { getContinent, useContinent } from "../../services/hooks/useContinent";
import { QueryObserverBaseResult, UseQueryOptions } from "react-query";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

interface propsType{
  continent: ContinentProps;
}

interface cityProps {
  name: string;
  country: string;
  flag: string;
  banner: string;
}

interface ContinentProps extends QueryObserverBaseResult {
  data: {
    id: string;
    name: string;
    text: string
    countrinng: number;
    language: number;
    City: cityProps[];
  }
  
}
export default function Continent() {
  const { query } = useRouter();
  const [dataContinentHooks, setDataContinentHooks] = useState({} as any);

 
   
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    async function getData() {
      const dataContinent = await getContinent(query?.continent as string)
      setDataContinentHooks({...dataContinent})
    }
    
    setTimeout(() => {
      getData();
    }, 3000)
  }, [query])

  console.log()
  
  

  function imageCityAleatory(){
    const index = Math.floor(Math.random() * dataContinentHooks?.City?.length);
    return dataContinentHooks?.City?.[index].banner;
  }
  return (
    <Flex w="full" direction="column">
      <Header >
        <Link href="/"> 
        
          <a>
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
          </a>
        </Link>
        
      </Header>
  
    
        
            <Flex position="relative">
           
              <Image filter="brightness(0.8)" w="full" objectFit="cover" maxH="500px" src={imageCityAleatory()} alt={dataContinentHooks?.name} bgColor="#000000" />
              <Heading  w="full" maxW={1160} display="flex" alignItems={{base: "center", lg: "end"}} justifyContent={{base: "center", lg: "start"}} mx="auto" position="absolute" right="0" left="0" h="full" color="gray.50">
                <Text  as="span" fontSize={{base: "2xl", lg:"5xl"}} fontWeight="semibold" pb={{base: `${0}`, lg: `${16}`}}>
                  {dataContinentHooks?.name}
                </Text>
              </Heading>
            
          </Flex>
          <Grid as="section" w="full" maxW={1160}  mx="auto" mb="10" textAlign="center">
            <Flex flexDirection={{base:"column", lg:"row"}} gap={{base: "4", lg: "20"}} mt="20" alignItems="center" color="gray.700">
              <Text maxW={{base: "full", lg:"600px"}} fontSize={{base:"sm", lg:"2xl"}}  px={{base: '4', lg:"0"}} lineHeight="1.4" textAlign="justify">
              {dataContinentHooks?.text}
              </Text>
              <Stack direction="row" gap={{base:"4", lg:"16"}} p={{base:'4', lg:"0"}}>
                <Info quant={dataContinentHooks?.countrinng} title="países" />
                <Info quant={dataContinentHooks?.language} title="línguas" />
                <Info quant={dataContinentHooks?.City?.length} title="cidades +100" />
              </Stack>
            </Flex>
    
            <Heading color="gray.700" mt="20" mb="10" textAlign="initial" px={{base: '4', lg:"0"}}>Cidades +100</Heading>
            <Flex textAlign={{base:"center", lg:"initial"}} justifyContent={{base:"center", lg:"initial"}} alignItems={{base:"center", lg:"initial"}} flexDirection={{base:"column", lg:"row"}} gap={42} m="0" wrap="wrap" >
              {dataContinentHooks?.City?.map((valueResponse: cityProps) => {
                return(
                  <City 
                    key={valueResponse.name}
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




