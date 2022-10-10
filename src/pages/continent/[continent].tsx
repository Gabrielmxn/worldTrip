import { Flex, Heading, Icon, Image, Stack, Text, Grid, Spinner, Skeleton, SkeletonText, useBoolean, Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { RiArrowLeftSLine } from "react-icons/ri";
import { City } from "../../components/City";
import Link from "next/link";
import { Info } from "../../components/Info";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { getContinent } from "../../services/hooks/useContinent";



interface propsType {
  continent: ContinentProps;
}

interface cityProps {
  name: string;
  country: string;
  flag: string;
  banner: string;
}

interface ContinentProps {
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
  const [isLoaded, setIsLoaded] = useBoolean(false)


  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    async function getData() {
      const dataContinent = await getContinent(query?.continent as string)
      setDataContinentHooks({ ...dataContinent })
      setTimeout(() => {
        setIsLoaded.on();
      }, 2000)
    }
    getData();
  }, [query])


  function imageCityAleatory() {
    const index = Math.floor(Math.random() * dataContinentHooks?.City?.length);
    return dataContinentHooks?.City?.[index].banner;
  }
  return (
    <>
      {Object.keys(dataContinentHooks).length === 0
        ? (
          <Flex justify="center" align="center" h="100vh" border="1px solid red">
            <Spinner color="#FFBA08" thickness='4px' size='xl' />
          </Flex>
        )

        : (<Flex w="full" direction="column">
            <Header isLoaded={isLoaded}>
              <Link href="/">
                <a>
                  <Skeleton isLoaded={isLoaded}>
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
                  </Skeleton>
                </a>
              </Link>
            </Header>
            <Box w="full">
              <Skeleton display="flex" position="relative" w="full" maxH="500px" isLoaded={isLoaded}>
                <Image filter="brightness(0.8)" w="full" objectFit="cover" maxH="500px" src={imageCityAleatory()} alt={dataContinentHooks?.name} bgColor="#000000" />
                <Heading w="full" maxW={1160} display="flex" alignItems={{ base: "center", lg: "end" }} justifyContent={{ base: "center", lg: "start" }} mx="auto" position="absolute" right="0" left="0" h="full" color="gray.50">
                  <Text as="span" fontSize={{ base: "2xl", lg: "5xl" }} fontWeight="semibold" pb={{ base: `${0}`, lg: `${16}` }}>
                    {dataContinentHooks?.name}
                  </Text>
                </Heading>
              </Skeleton>
            </Box>

            <Grid as="section" w="full" maxW={1160} mx="auto" mb="10" textAlign="center">
              <Flex flexDirection={{ base: "column", lg: "row" }} gap={{ base: "4", lg: "20" }} mt="20" alignItems="center" color="gray.700">
                <SkeletonText w="full" noOfLines={6} isLoaded={isLoaded} maxW="600px" fontSize={{ base: "sm", lg: "2xl" }} px={{ base: '4', lg: "0" }} lineHeight="1.4" textAlign="justify">
                  <Box>
                    {dataContinentHooks?.text}
                  </Box>
                </SkeletonText>
                <Stack direction="row" align="center" justify="center" spacing={{ base: "4", lg: "16" }} mx="auto">
                  <Info quant={dataContinentHooks?.countrinng} title="países" isLoaded={isLoaded} />
                  <Info quant={dataContinentHooks?.language} title="línguas" isLoaded={isLoaded} />
                  <Info quant={dataContinentHooks?.City?.length} title="cidades +100" isLoaded={isLoaded} />
                </Stack>
              </Flex>

              <Skeleton color="gray.700" mt="20" mb="10" textAlign="initial" px={{ base: '4', lg: "0" }} isLoaded={isLoaded}>
                <Heading display="inline">Cidades +100</Heading>
              </Skeleton>

              <Flex textAlign={{ base: "center", lg: "initial" }} justifyContent={{ base: "center", lg: "initial" }} alignItems={{ base: "center", lg: "initial" }} flexDirection={{ base: "column", lg: "row" }} gap={42} m="0" wrap="wrap" >

                {dataContinentHooks?.City?.map((valueResponse: cityProps) => {
                  return (


                    <City
                      key={valueResponse.name}
                      imageUrl={valueResponse.banner}
                      name={valueResponse.name}
                      country={valueResponse.country}
                      flag={valueResponse.flag}
                      isLoaded={isLoaded}
                    />


                  )
                })}
              </Flex>
            </Grid>
        </Flex>)

      }
    </>
  );
}




