import React, { Component } from 'react';

import { View } from 'react-native';

const House_of_Cards = require('../assets/img/houseofcards.jpg');
const Big_Mouth = require('../assets/img/bigmouth.jpg');
const Dare_Evil = require('../assets/img/dareevil.jpg');
const Gilmore_Girls = require('../assets/img/houseofcards.jpg');
const Stranger_Things = require('../assets/img/StrangerThings.jpg')

const SHOWS = [
    {
      title: 'Daredevil',
      summary: 'Matt Murdock foi vítima de um acidente que o deixou cego quando adolescente, mas que também o dotou de superpoderes sensoriais. Formado em Direito, Matt passa a lutar contra todas as formas de injustiça: como advogado e super-herói.',
      starring: 'Charlie Cox',
      creator: 'NetFlix',
      image: Dare_Evil,
    },
    {
      title: 'House Of Cards',
      summary: 'O congressista Francis Underwood e sua mulher, Claire, fazem de tudo para conquistar seus objetivos, não importa o que aconteça. Um mundo político recheado de ganância, corrupção e luxúria na capital Washington.',
      starring: 'Beau Willimon, Michael Dobbs, Andrew Davies',
      creator: 'NetFlix',
      image: House_of_Cards,
    },
    {
      title: 'Big Mouth',
      summary: 'Big Mouth é uma série animada de comédia adulta criada por Nick Kroll, Andrew Goldberg, Mark Levin e Jennifer Flackett, e exibida pela Netflix desde setembro de 2017. Com a narrativa baseada na vida de Kroll e Goldberg no período de pré-adolescência, a sitcom aborda temas como puberdade e sexo',
      starring: 'Nick Kroll, John Mulaney, Jessi Klein, Jason Mantzoukas,',
      creator: 'NetFlix',
      image: Big_Mouth,
    },
    {
      title: 'Gilmore Girls',
      summary: 'Em uma pequena cidade que mistura sonhadores, artistas e pessoas comuns, este drama multigeracional sobre família e amizade gira em torno da relação de Lorelai Gilmore e sua filha, Rory.',
      starring: 'Alexis Bledel, Lauren Graham',
      creator: 'The Duffer Brothers',
      image: Gilmore_Girls,
    },
    {
      title: 'Stranger Things',
      summary: 'Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério, envolvendo um experimento secreto do governo, forças sobrenaturais e uma garotinha.',
      starring: 'Bobby Brown, Gaten Matarazzo, Caleb Mclaughlin',
      creator: 'The Duffer Brothers',
      image: Stranger_Things,
    },
    {
        title: 'Daredevil',
        summary: 'Matt Murdock foi vítima de um acidente que o deixou cego quando adolescente, mas que também o dotou de superpoderes sensoriais. Formado em Direito, Matt passa a lutar contra todas as formas de injustiça: como advogado e super-herói.',
        starring: 'Charlie Cox',
        creator: 'NetFlix',
        image: Dare_Evil,
      },
      {
        title: 'House Of Cards',
        summary: 'O congressista Francis Underwood e sua mulher, Claire, fazem de tudo para conquistar seus objetivos, não importa o que aconteça. Um mundo político recheado de ganância, corrupção e luxúria na capital Washington.',
        starring: 'Beau Willimon, Michael Dobbs, Andrew Davies',
        creator: 'NetFlix',
        image: House_of_Cards,
      },
      {
        title: 'Big Mouth',
        summary: 'Big Mouth é uma série animada de comédia adulta criada por Nick Kroll, Andrew Goldberg, Mark Levin e Jennifer Flackett, e exibida pela Netflix desde setembro de 2017. Com a narrativa baseada na vida de Kroll e Goldberg no período de pré-adolescência, a sitcom aborda temas como puberdade e sexo',
        starring: 'Nick Kroll, John Mulaney, Jessi Klein, Jason Mantzoukas,',
        creator: 'NetFlix',
        image: Big_Mouth,
      },
      {
        title: 'Gilmore Girls',
        summary: 'Em uma pequena cidade que mistura sonhadores, artistas e pessoas comuns, este drama multigeracional sobre família e amizade gira em torno da relação de Lorelai Gilmore e sua filha, Rory.',
        starring: 'Alexis Bledel, Lauren Graham',
        creator: 'The Duffer Brothers',
        image: Gilmore_Girls,
      },
      {
        title: 'Stranger Things',
        summary: 'Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério, envolvendo um experimento secreto do governo, forças sobrenaturais e uma garotinha.',
        starring: 'Bobby Brown, Gaten Matarazzo, Caleb Mclaughlin',
        creator: 'The Duffer Brothers',
        image: Stranger_Things,
      }
     
    
  ];
  
  export default SHOWS;