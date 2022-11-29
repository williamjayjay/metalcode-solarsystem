import React from "react"
import { TouchableOpacity } from "react-native"
import {useNavigation} from '@react-navigation/native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { ColumnTitles, Container, Description, ImagePlanet, RowImageTitles, Title, } from "./styles"
import { PlanetDatas } from "../../types/planet"
import { propsStack } from "../../routes/stack/Models"


interface Props {
  data:PlanetDatas
}

export function PlanetSelector ({
  data
}:Props) {

  const navigation = useNavigation<propsStack>()

  const { name, image, orbitalPeriodSun } =data

  const navigateToPlanetInfo = () => {
    navigation.navigate("Planet", data)
  }

  return (
    <Container>
      <RowImageTitles>
        <ImagePlanet resizeMode="contain" 
        source={image 
          ? {uri:image} 
          : require('../../assets/planet-gray.png') }
         />


         <ColumnTitles>
          <Title numberOfLines={1} > {name} </Title>

          <Description style={{ textDecorationLine:'underline' }} >lenght of year:</Description>
          <Description numberOfLines={1} >{orbitalPeriodSun}</Description>
         </ColumnTitles>
        
      </RowImageTitles>

      <TouchableOpacity style={{ width:40, position:'absolute', right:0 }} onPress={navigateToPlanetInfo} >
      <MaterialCommunityIcons
            name="chevron-right"
            size={40}
            color='#D9D9D9'
            />
      </TouchableOpacity>

    </Container>
  )

}