import { americaDoNorte } from './continent/americaDoNorte';
import { oceania } from './continent/oceania';
import { createServer, Factory, Model,Registry  } from 'miragejs';
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { americaDoSul } from './continent/americaDoSul';
import { africa } from './continent/africa';

type City = {
  name: string;
  country: string;
  flag: string;
  banner: string;
  continentId: string;
}
type Continent = {
  name: string;
  text: string
  countrinng: number;
  language: number;
  City: City[];
}

const ContinentModal: ModelDefinition<Continent> = Model.extend<Partial<Continent>>({});

type AppRegistry = Registry<
  {
    continent: typeof ContinentModal;
  },
  {}
>;
type AppSchema = Schema<AppRegistry>;

export function makeServer() {
  const server = createServer({
    models:{
      continent: ContinentModal
    },
    seeds(server){
      server.create('continent', {
        name: 'europa',
        text: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
        countrinng: 50,
        language: 24,
        "City": [
          {
            
            "name": "Londres",
            "country": "Reino Unido",
            "flag": "/image/paises/reinounido.svg",
            "banner": "/image/banner/londres.jpg",
            
          },
          {
            
            "name": "Paris",
            "country": "França",
            "flag": "/image/paises/frança.svg",
            "banner": "/image/banner/paris.jpg",
            
          },
          {
            
            "name": "Praga",
            "country": "República Tcheca",
            "flag": "/image/paises/republicaTcheca.svg",
            "banner": "/image/banner/praga.jpg",
            
          }
        ]
      } as object)
      server.create('continent', {
        
        "name": "ásia",
        "text": "A Ásia é o maior continente em área terrestre do mundo, estando boa parte do continente localizado no Hemisfério Norte. Além de ser o mais extenso, é também o mais populoso, habitando nele cerca de três quintos da população mundial. A Ásia é multicultural, abrigando diversas culturas, etnias, religiões e tradições.",
        "countrinng": 46,
        "language": 30,
        "City": [
          {
            
            "name": "Xangai",
            "country": "China",
            "flag": "/image/paises/china.svg",
            "banner": "/image/banner/xangai.jpg",
            
          },
          {
            
            "name": "Mumbai",
            "country": "Índia",
            "flag": "/image/paises/india.svg",
            "banner": "/image/banner/mumbai.jpg",
            
          }
        ]
      }  as object
      )
      server.create('continent', {
        ...americaDoNorte
      }  as object
      )
      server.create('continent',  {
        ...oceania
      }  as object
      )
      server.create('continent', {
        ...africa
      }  as object
      )
      server.create('continent', {
        ...americaDoSul
      }  as object
      )
    },
    routes() {
      this.namespace = 'api';
      this.timing = 500;

      this.get("/continent/:name", (schema: AppSchema, request) => {
        let name = request.params.name

        return schema.findBy("continent", { name: name })
      })

      this.namespace = '';
      this.passthrough();

    },
  })

  return server;
}