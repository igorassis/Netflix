import React, { Component } from 'react';

import { View,FlatList, Image, TouchableOpacity} from 'react-native';


const House_of_Cards = require('../assets/img/house1.gif');
const Big_Mouth = require('../assets/img/bigmouthgif.gif');
const Dare_Evil = require('../assets/img/dareevilgif.gif');
const Gilmore_Girls = require('../assets/img/gilmoregif.gif');
const Stranger_Things = require('../assets/img/strangergif1.gif')


export default class Lista extends Component {

    state = {
        data: [
            {   id:'1',
                title: 'Daredevil',
                summary: 'Matt Murdock foi vítima de um acidente que o deixou cego quando adolescente, mas que também o dotou de superpoderes sensoriais. Formado em Direito, Matt passa a lutar contra todas as formas de injustiça: como advogado e super-herói.',
                starring: 'Charlie Cox',
                creator: 'NetFlix',
                image: Dare_Evil,
              },
              { id:'2',
                title: 'House Of Cards',
                summary: 'O congressista Francis Underwood e sua mulher, Claire, fazem de tudo para conquistar seus objetivos, não importa o que aconteça. Um mundo político recheado de ganância, corrupção e luxúria na capital Washington.',
                starring: 'Beau Willimon, Michael Dobbs, Andrew Davies',
                creator: 'NetFlix',
                image: House_of_Cards,
              },
              { id:'3',
                title: 'Big Mouth',
                summary: 'Big Mouth é uma série animada de comédia adulta criada por Nick Kroll, Andrew Goldberg, Mark Levin e Jennifer Flackett, e exibida pela Netflix desde setembro de 2017. Com a narrativa baseada na vida de Kroll e Goldberg no período de pré-adolescência, a sitcom aborda temas como puberdade e sexo',
                starring: 'Nick Kroll, John Mulaney, Jessi Klein, Jason Mantzoukas,',
                creator: 'NetFlix',
                image: Big_Mouth,
              },
              { id:'4',
                title: 'Gilmore Girls',
                summary: 'Em uma pequena cidade que mistura sonhadores, artistas e pessoas comuns, este drama multigeracional sobre família e amizade gira em torno da relação de Lorelai Gilmore e sua filha, Rory.',
                starring: 'Alexis Bledel, Lauren Graham',
                creator: 'The Duffer Brothers',
                image: Gilmore_Girls,
              },
              { id:'5',
                title: 'Stranger Things',
                summary: 'Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério, envolvendo um experimento secreto do governo, forças sobrenaturais e uma garotinha.',
                starring: 'Bobby Brown, Gaten Matarazzo, Caleb Mclaughlin',
                creator: 'The Duffer Brothers',
                image: Stranger_Things,
              },
              {   id:'6',
                  title: 'Daredevil',
                  summary: 'Matt Murdock foi vítima de um acidente que o deixou cego quando adolescente, mas que também o dotou de superpoderes sensoriais. Formado em Direito, Matt passa a lutar contra todas as formas de injustiça: como advogado e super-herói.',
                  starring: 'Charlie Cox',
                  creator: 'NetFlix',
                  image: Dare_Evil,
                },
                { id:'7',
                  title: 'House Of Cards',
                  summary: 'O congressista Francis Underwood e sua mulher, Claire, fazem de tudo para conquistar seus objetivos, não importa o que aconteça. Um mundo político recheado de ganância, corrupção e luxúria na capital Washington.',
                  starring: 'Beau Willimon, Michael Dobbs, Andrew Davies',
                  creator: 'NetFlix',
                  image: House_of_Cards,
                },
                { id:'8',
                  title: 'Big Mouth',
                  summary: 'Big Mouth é uma série animada de comédia adulta criada por Nick Kroll, Andrew Goldberg, Mark Levin e Jennifer Flackett, e exibida pela Netflix desde setembro de 2017. Com a narrativa baseada na vida de Kroll e Goldberg no período de pré-adolescência, a sitcom aborda temas como puberdade e sexo',
                  starring: 'Nick Kroll, John Mulaney, Jessi Klein, Jason Mantzoukas,',
                  creator: 'NetFlix',
                  image: Big_Mouth,
                },
                { id:'9',
                  title: 'Gilmore Girls',
                  summary: 'Em uma pequena cidade que mistura sonhadores, artistas e pessoas comuns, este drama multigeracional sobre família e amizade gira em torno da relação de Lorelai Gilmore e sua filha, Rory.',
                  starring: 'Alexis Bledel, Lauren Graham',
                  creator: 'The Duffer Brothers',
                  image: Gilmore_Girls,
                },
                { id:'10',
                  title: 'Stranger Things',
                  summary: 'Will, um garoto de 12 anos, desaparece em Montauk, Long Island. Enquanto a polícia, família e amigos procuram respostas, eles mergulham em um extraordinário mistério, envolvendo um experimento secreto do governo, forças sobrenaturais e uma garotinha.',
                  starring: 'Bobby Brown, Gaten Matarazzo, Caleb Mclaughlin',
                  creator: 'The Duffer Brothers',
                  image: Stranger_Things,
                }
        ]
    }

  render() {
    return (
        <View style={{marginTop:6}}>


            <FlatList                
                data={this.state.data}
                keyExtractor={item => item.id}
                contentContainerStyle={{ justifyContent: 'center', }}
                horizontal
              
                renderItem={({ item }) => {
                    return (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 10 }}>

                            <TouchableOpacity onPress={() => { }}>
                                <Image source={item.image}
                                    style={{
                                        resizeMode: 'cover',
                                        width: 360,
                                        height: 220,
                                        paddingHorizontal: 1,
                                        borderRadius: 36,
                                    }} />
                                <View style={{
                                    alignSelf: 'flex-start',
                                    marginHorizontal: 10,
                                    marginTop: 10,
                                }}>
                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
      
        
        

        </View>
    )
  }
}
