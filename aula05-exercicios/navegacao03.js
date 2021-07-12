import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import DesafioPerfil from '../aula04-exercicios/desafio-perfil1';
import Trabalho01 from '../aula04-exercicios/Trabalho01-1'

const Tab = createBottomTabNavigator();
export default function Navegacao03 () {
  return (
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen 
            name="Perfil" 
            component={DesafioPerfil}
            options={{ 
              tabBarIcon: () => (<Ionicons name="person" size={20} color="blue" />)}}
            />
          <Tab.Screen 
            name="Ir para a tela do desafio 01" 
            component={Trabalho01}
            options={{ 
              tabBarIcon: () => (<Ionicons name="warning" size={20} color="yellow" />)}}
            />           
      </Tab.Navigator>     
    </NavigationContainer>
  );
}



