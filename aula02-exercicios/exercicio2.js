import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Exercicio2(){
   return (
     <View style={styles.container}>
        <View style={styles.box} />
     </View>
    );
}

const styles = StyleSheet.create({
   container: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'row',
     
     
   },
   box: {
      
      flex:1,
      width: '15%',
      height: '15%',
      backgroundColor: '#50E3C2',

   }
});