import { IoFootball, IoTvSharp } from "react-icons/io5";
import { GrApple } from "react-icons/gr";
import { RiSmartphoneFill } from "react-icons/ri";
import { IoMdClock } from "react-icons/io";
import { GiClothes } from "react-icons/gi";
import { FaBabyCarriage, FaHome  } from 'react-icons/fa'
import { PiCircuitryFill } from "react-icons/pi";
import { MdSmartToy } from "react-icons/md";
import { IconType } from 'react-icons';

function generateId(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 4; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

interface Subcategoria {
  id: string;
  title: string;
  subcategories?: Subcategoria[];
  image: string;
}

interface Categoria {
  id: string;
  title: string;
  subcategories: Subcategoria[];
  icon: IconType;
}

const categorias: Categoria[] = [
  {
    id: generateId(),
    title: 'Roupas',
    icon: GiClothes,
    subcategories: [
      {
        id: generateId(),
        title: 'Moda Feminina',
        image: 'url',
        subcategories: [
          {
            id: generateId(),
            title: 'Roupas Femininas',
            image: 'url',
          },
          {
            id: generateId(),
            title: 'Sapatos Femininos',
            image: 'url',
          },
        ],
      },
      {
        id: generateId(),
        title: 'Moda Masculina',
        image: 'url',
        subcategories: [
          {
            id: generateId(),
            title: 'Roupas Masculinas',
            image: 'url',
          },
          {
            id: generateId(),
            title: 'Sapatos Masculinos',
            image: 'url',
          },
        ],
      },
      {
        id: generateId(),
        title: 'Moda Infantil',
        image: 'url',
        subcategories: [
          {
            id: generateId(),
            title: 'Roupas',
            image: 'url',
          },
          {
            id: generateId(),
            title: 'Calçados',
            image: 'url',
          },
          {
            id: generateId(),
            title: 'Acessórios',
            image: 'url',
          },
        ],
      },
    ],
  },
  {
    id: generateId(),
    title: 'Apple',
    icon: GrApple,
    subcategories: [
      {
        id: generateId(),
        title: 'Iphones',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Ipads',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Acessórios',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Celulares e Dispositivos',
    icon: RiSmartphoneFill,
    subcategories: [
      {
        id: generateId(),
        title: 'Smartphones',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Tablets',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Acessórios para Celulares',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Eletroportáteis',
    icon: IoFootball,
    subcategories: [
      {
        id: generateId(),
        title: 'Eletrodomésticos Portáteis',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Cuidados Pessoais',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Mãe e Bebê',
    icon: FaBabyCarriage,
    subcategories: [
      {
        id: generateId(),
        title: 'Roupas e Acessórios para Bebês',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Cuidados com a Gestante',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Alimentação Infantil',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Casa e Construção',
    icon: FaHome ,
    subcategories: [
      {
        id: generateId(),
        title: 'Materiais de Construção',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Móveis',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Decoração',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Ferramentas',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Tecnologia',
    icon: PiCircuitryFill,
    subcategories: [
      {
        id: generateId(),
        title: 'Desktops',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'PCs de Mesa',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'All-in-One',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Mini PCs',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Consoles',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Consoles de Jogos',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Acessórios para Consoles',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Domótica',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Smart Hubs',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Iluminação Inteligente',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Câmeras de Segurança',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Outras Tecnologias',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Dispositivos de Realidade Virtual',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Drones',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Impressoras 3D',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Relógios',
    icon: IoMdClock,
    subcategories: [
      {
        id: generateId(),
        title: 'Relógios de Pulso',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Relógios de Parede',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Relógios de Mesa',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Esportes e Lazer',
    icon: IoFootball,
    subcategories: [
      {
        id: generateId(),
        title: 'Artigos Esportivos',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Roupas Esportivas',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Equipamentos para Academia',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Brinquedos e Hobbies',
    icon: MdSmartToy,
    subcategories: [
      {
        id: generateId(),
        title: 'Brinquedos para Crianças',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Jogos de Tabuleiro',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Modelismo',
        image: 'url',
      },
    ],
  },
  {
    id: generateId(),
    title: 'Áudio e Vídeo',
    icon: IoTvSharp,
    subcategories: [
      {
        id: generateId(),
        title: 'Fones de Ouvido',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Caixas de Som',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Equipamentos de Áudio Profissional',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'TVs',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Projetores',
        image: 'url',
      },
      {
        id: generateId(),
        title: 'Players de Vídeo',
        image: 'url',
      },
    ],
  },
];

export default categorias;
