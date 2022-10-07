import { useQuery } from "react-query";
import { api } from "../api";
interface ContinentProps {
  continent: string;
}

interface nameContinent {
  nameContinent: string;
}
export async function getContinent({continent}: ContinentProps){
  console.log(continent)
  const { data } = await api.get(`continent/${continent}`)
  
  const continentData = {
      ...data?.continent,
      name: data?.continent.name[0].toUpperCase() + data?.continent.name.slice(1)
    }
  
  return continentData;
}

export function useContinent({nameContinent}: nameContinent){
  const continent = { continent: nameContinent }
  return useQuery('continent', () => { return getContinent(continent)}, {

  })
}