import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DesafioPerfil from '../aula04-exercicios/desafio-perfil1';
import Trabalho01 from '../aula04-exercicios/Trabalho01-1';

const stack = createStackNavigator();
export default function Navegacao01 () {
  return (
    <NavigationContainer>
      <stack.Navigator>
          <stack.Screen 
            name="Perfil" 
            component={DesafioPerfil}
            options={{ headerShown: false}} />
          <stack.Screen 
            name="Voltar para a tela de perfil" 
            component={Trabalho01} />
      </stack.Navigator>     
    </NavigationContainer>
  );
};



