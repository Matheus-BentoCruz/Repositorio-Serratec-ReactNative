import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DesafioPerfil from '../aula04-exercicios/desafio-perfil1';
import Trabalho01 from '../aula04-exercicios/Trabalho01-1'

const Drawer = createDrawerNavigator();



export default function Navegacao02({navigation}) {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
      initialRouteName="Perfil"
      // drawerContent={(props) => (
      //   <CustomDrawer {...props} navigation={navigation} />
      // )}
      >
          <Drawer.Screen 
            name="Perfil" 
            component={DesafioPerfil} />
          <Drawer.Screen 
            name="Ir para a tela do desafio 01" 
            component={Trabalho01} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
//Como customizar o Drawer
// const CustomDrawer = () => {
//   return (
//     <View style={{flex: 1, backgroundColor: 'blue' }}>
//       <Text>Custom Drawer</Text>     
//     </View>
//   )
// }


