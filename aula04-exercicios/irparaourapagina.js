import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';

import Exemplo1 from './exemplos/exemplo1';
import Exemplo2 from './exemplos/exemplo2';
import Exemplo3 from './exemplos/exemplo3';
import Exemplo4 from './exemplos/exemplo4';
import Exemplo5 from './exemplos/exemplo5';

import Exercicio1 from './aula02-exercicios/exercicio1';
import Exercicio2 from './aula02-exercicios/exercicio2';
import Exercicio3 from './aula02-exercicios/exercicio3';
import Exercicio4 from './aula02-exercicios/exercicio4';
import Exercicio5 from './aula02-exercicios/exercicio5';
import Exercicio6 from './aula02-exercicios/exercicio6';

import Componente from './aula03-exercicios/ComponentesBasicos'

const stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default function App({navigation}) {
  return (
    <NavigationContainer>
      {/* <stack.Navigator>
          <stack.Screen name="Componente" component={Componente} />
          <stack.Screen name="Exercicio6" component={Exercicio6} />
      </stack.Navigator> */}
      <Drawer.Navigator 
      initialRouteName="Componente"
      drawerContent={(props) => (
        <CustomDrawer {...props} navigation={navigation} />
      )}
      >
          <Drawer.Screen  name="Componente" component={Componente} />
          <Drawer.Screen name="Exercicio6" component={Exercicio6} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const CustomDrawer = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue' }}>
      <Text>Custom Drawer</Text>
      
    </View>
  )
}


