import React from 'react';
import { StyleSheet, View } from 'react-native';

const Exemplo5 = () => { 
   return (
     <View style={[styles.container,{flexDirection: 'column'}]}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'darkorange'}} />
        <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
        
    );
};

const styles = StyleSheet.create({
   container: {
     flex: 1,
     padding: 20,
   },
});

export default Exemplo5;