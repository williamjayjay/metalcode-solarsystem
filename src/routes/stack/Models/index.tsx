import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { PlanetDatas } from '../../../types/planet'

export type propsNavigationStack = {
  Home: undefined
  Planet: PlanetDatas
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>