import { Box, Flex, Heading, Icon, Image, Stack, Text, Grid } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { Header } from "../../components/Header";
import { RiArrowLeftSLine } from "react-icons/ri";
import bannerImg from '../../assets/banner.png'
import { City } from "../../components/City";
import Link from "next/link";
import { Info } from "../../components/Info";

interface ParamsProps extends ParsedUrlQuery {
  post: string;
}

export default function Continent() {
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
        <Heading fontWeight="semibold" position="absolute" color="gray.50" bottom="59" left="140">Europa</Heading>
      </Flex>
      <Grid as="section" maxW={1160} mx="auto" mb="10">
        <Flex mt="20" alignItems="center" justifyContent="space-between" color="gray.700">
          <Text w={500} fontSize={20} lineHeight="1.4" textAlign="justify">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Stack direction="row" gap="16" mr="4">
            <Info quant={50} title="países" />
            <Info quant={60} title="línguas" />
            <Info quant={27} title="cidades +100" />
          </Stack>
        </Flex>

        <Heading color="gray.700" mt="20" mb="10">Cidades +100</Heading>
        <Flex gap={42} m="0" wrap="wrap" >
          <City 
            imageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Londres"
            country="França"
            flag="http://localhost:3000/reinounido.svg"
          />
          <City 
            imageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Londres"
            country="França"
            flag="http://localhost:3000/reinounido.svg"
          />
          <City 
            imageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Londres"
            country="França"
            flag="http://localhost:3000/reinounido.svg"
          />
          <City 
            imageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Londres"
            country="França"
            flag="http://localhost:3000/reinounido.svg"
          />
          <City 
            imageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Londres"
            country="França"
            flag="http://localhost:3000/reinounido.svg"
          />
          <City 
            imageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Londres"
            country="França"
            flag="http://localhost:3000/reinounido.svg"
          />
          <City 
            imageUrl="https://images.unsplash.com/photo-1581430872221-d1cfed785922?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            name="Londres"
            country="França"
            flag="http://localhost:3000/reinounido.svg"
          />
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
  const { continent } = context.params as ParamsProps;

  console.log(continent);
  return {
    props: {
      continent,
    },
    revalidate: 1,
  };
};
