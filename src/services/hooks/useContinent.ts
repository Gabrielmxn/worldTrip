import { api } from "../api";


interface cityProps {
  name: string;
  country: string;
  flag: string;
  banner: string;
}

interface ContinentsProps{
  id: string;
  name: string;
  text: string
  countrinng: number;
  language: number;
  City: cityProps[];
}

export async function getContinent(continent: string){
  if(continent){
    const { data } = await api.get(`continent/${continent}`)

    const continentData = {
        ...data?.continent,
        name: data?.continent.name[0].toUpperCase() + data?.continent.name.slice(1),
      } as ContinentsProps
    
    return continentData;
  }
  
}

