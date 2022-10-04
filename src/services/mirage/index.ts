import { americaDoNorte } from './americaDoNorte';
import { oceania } from './oceania';
import { createServer, Factory, Model,Registry  } from 'miragejs';
import { ModelDefinition } from "miragejs/-types";
import Schema from "miragejs/orm/schema";
import { americaDoSul } from './americaDoSul';
import { africa } from './africa';

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
            "flag": "http://192.168.0.191:3000/image/paises/reinounido.svg",
            "banner": "http://192.168.0.191:3000/image/banner/londres.jpg",
            
          },
          {
            
            "name": "Paris",
            "country": "França",
            "flag": "http://192.168.0.191:3000/image/paises/frança.svg",
            "banner": "http://192.168.0.191:3000/image/banner/paris.jpg",
            
          },
          {
            
            "name": "Praga",
            "country": "República Tcheca",
            "flag": "http://192.168.0.191:3000/image/paises/republicaTcheca.svg",
            "banner": "http://192.168.0.191:3000/image/banner/praga.jpg",
            
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
            "flag": "http://192.168.0.191:3000/image/paises/china.svg",
            "banner": "http://192.168.0.191:3000/image/banner/xangai.jpg",
            
          },
          {
            
            "name": "Mumbai",
            "country": "Índia",
            "flag": "http://192.168.0.191:3000/image/paises/india.svg",
            "banner": "http://192.168.0.191:3000/image/banner/mumbai.jpg",
            
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