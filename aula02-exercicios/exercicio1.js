import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Exercicio1(){
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
   },
   box: {      
      flex:1,
      width: '30%',
      height: '30%',
      backgroundColor: '#50E3C2',
   }
});

