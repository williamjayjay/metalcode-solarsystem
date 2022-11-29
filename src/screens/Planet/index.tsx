import React from 'react';
import { ColumnMoon, ColumnNameAndDescription, Container, ContainerImagePlanet, ContainerScroll, ContainerStatus, DescriptionPlanet, HeaderPlanetPage, ImageLargePlanet, RowMoon, TextMoons, TitlePlanet, TitleStatus, ValueStatus,} from './styles';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {useRoute} from '@react-navigation/native'
import { Header } from '../../components/Header';
import { ContainerImage } from '../Home/styles';
import { View } from 'react-native';

 function Planet() {
  const params = useRoute()

  const data = params?.params as any

  const {name='name' , description='description', moons=0 , image} = data as any


  const componentStatus = (value:string, index:number) => {
    
    switch(value){
      case 'gravity':
        return(
          <ContainerStatus key={index} >
            <MaterialCommunityIcons
              name="leaf"
              size={24}
              color='#D9D9D9'
            />

            <TitleStatus>Gravity:</TitleStatus>
            <ValueStatus>{data[value]}</ValueStatus>
          </ContainerStatus>
        )

      case 'orbitalPeriodSun':
        return(
          <ContainerStatus key={index}>
            <MaterialCommunityIcons
              name="weather-sunset-up"
              size={24}
              color='#D9D9D9'
            />

            <TitleStatus>Orbit in Sun:</TitleStatus>
            <ValueStatus>{data[value]}</ValueStatus>
          </ContainerStatus>
        )

      case 'temperaturesMean':
        return(
          <ContainerStatus key={index}>
            <MaterialCommunityIcons
              name="thermometer-lines"
              size={24}
              color='#D9D9D9'
            />

            <TitleStatus>Temperature:</TitleStatus>
            <ValueStatus>{data[value]}</ValueStatus>
          </ContainerStatus>
        )

      case 'day':
        return(
          <ContainerStatus key={index}>
            <MaterialCommunityIcons
              name="timer-sand"
              size={24}
              color='#D9D9D9'
            />

            <TitleStatus>Day duration:</TitleStatus>
            <ValueStatus>{data[value]}</ValueStatus>
          </ContainerStatus>
        )

      default:
        break;
    }
  }

  return (
    <ContainerImage
    source={require('../../assets/waymilk.jpg')}
    >

      <Container>
        <Header goBack />

        <ContainerScroll>

          <HeaderPlanetPage>

            <ColumnNameAndDescription>
              <TitlePlanet>{name}</TitlePlanet>
            </ColumnNameAndDescription>

            <ColumnMoon>
              <RowMoon>
                <TextMoons>{moons}</TextMoons>
                <MaterialCommunityIcons
                  name="moon-full"
                  size={24}
                  color='#D9D9D9'
                  style={{ marginLeft:4 }}
                  />

              </RowMoon>
                <DescriptionPlanet>{moons > 1 ? 'moons' : 'moon'}</DescriptionPlanet>
            
            
            </ColumnMoon>
    

          </HeaderPlanetPage>

          <DescriptionPlanet>{description}</DescriptionPlanet>

          <>
          <ContainerImagePlanet>
            <ImageLargePlanet
              resizeMode="contain"
              source={image ? {uri: image} : null}
            />

          </ContainerImagePlanet>

          {
            Object.keys(data).map((value, index) => {
              return componentStatus(value, index)
            })
          }

          <View style={{ height:64 }} />

          </>
          
        </ContainerScroll>

        
      </Container>

    </ContainerImage>

  );
}


export {Planet}
