import React from 'react';
import { Container, ContainerImage, ContainerScroll } from './styles';
import {View, Text, TouchableOpacity} from 'react-native'
import { Header } from '../../components/Header';
import { planetsDatas } from '../../constants/planets';
import { PlanetSelector } from '../../components/PlanetSelector';


 function Home({navigation}:any ) {
  return (
    <ContainerImage
    source={require('../../assets/waymilk.jpg')}
    >

      <Container>
        <Header/>

        <ContainerScroll>
         {
          planetsDatas.map((data) => (
            <PlanetSelector key={data.id} data={data} />
          ))
         }
          <View style={{ height:32 }} />
        </ContainerScroll>
        
      </Container>

    </ContainerImage>
  );
}


export {Home}
