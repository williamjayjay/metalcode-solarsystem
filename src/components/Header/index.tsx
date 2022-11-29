import React from "react"
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { TouchableOpacity, View } from "react-native"
import { Container, Title, TitleComponent } from "./styles"
import {useNavigation} from '@react-navigation/native'


interface Props {
  goBack?:Boolean
}

export function Header ({
goBack = false
}:Props) {

  const navigation = useNavigation()

  const goBackScreen = () => (
    navigation.goBack()
  )

  return (
    <Container>

      {
        !goBack
        ?
        <View style={{width:40}} />

        :

        <TouchableOpacity  onPress={goBackScreen}>
            <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color='#D9D9D9'
            />

        </TouchableOpacity>

}

          <TitleComponent>

            <MaterialCommunityIcons
              name="earth"
              size={26}
              color='#D9D9D9'
              style={{marginRight:4}}
              />

            <Title>Metal SolarSystem</Title>

          </TitleComponent>

          <View style={{width:40}} />

    </Container>
  )

}