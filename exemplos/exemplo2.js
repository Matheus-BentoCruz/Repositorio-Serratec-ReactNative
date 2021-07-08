//Dimensão Fixa
import React from 'react';
import { View } from 'react-native';

const Exemplo2 = () => { 
   return (
     <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
	<View style={{width:50, height:50, backgroundColor: 'powderblue'}} />
	<View style={{width:100, height:100, backgroundColor: 'skyblue'}} />
	<View style={{width:150, height:150, backgroundColor: 'steelblue'}} />
    </View>
        
    );
};

export default Exemplo2;