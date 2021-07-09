import React from 'react';
import { StyleSheet, View } from 'react-native';

const Exercicio6 =() => {
   return (
     <View style={styles.container}>
        <View style={styles.container2}>
            <View style={styles.box1}></View>
            <View style={styles.box1}></View>
            <View style={styles.box1}></View>
        </View>

        <View style={styles.container2}>

            <View style={styles.box2}></View>
            <View style={styles.box2}></View>
            <View style={styles.box2}></View>
        </View>

        <View style={styles.container2}>
            <View style={styles.box3}></View>
            <View style={styles.box3}></View>
            <View style={styles.box3}></View>
        </View>

        <View style={styles.container2}>
            <View style={styles.box4}></View>
            <View style={styles.box4}></View>
            <View style={styles.box4}></View>
        </View>
     </View>    
    );
};

const styles = StyleSheet.create({
   container: {
     flex:1,     
   },

   container2:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
   },
   box1: {
      width: '25%',
      height: '60%',
      backgroundColor: '#50E3C2'
   },
   box2: {
    width: '25%',
    height: '60%',
    backgroundColor: '#5A90E2'
 },
   box3: {
    width: '25%',
    height: '60%',
    backgroundColor: '#9013FE'
 },
   box4: {
    width: '25%',
    height: '60%',
    backgroundColor: '#F5A623'
 },
});

export default Exercicio6;