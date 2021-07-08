import React from 'react';
import { StyleSheet, View } from 'react-native';

const Exercicio4 =() => {
   return (
     <View style={styles.container}>
        <View style={styles.box1}></View>
        <View style={styles.box2} ></View>
        <View style={styles.box3} ></View>
     </View>
    );
};

const styles = StyleSheet.create({
   container: {
     flex:1,
     justifyContent: 'center',
     alignItems: 'center',
     flexDirection: 'row'
   },
   box1: {
      
    //   flex:1,
      width: '25%',
      height: '15%',
      backgroundColor: '#50E3C2'
   },

   box2: {
      
    // flex:1,
    width: '25%',
    height: '15%',
    backgroundColor: '#4A90E2'
 },

 box3: {
      
    // flex:1,
    width: '25%',
    height: '15%',
    backgroundColor: '#9013FE'
 },
});

export default Exercicio4;