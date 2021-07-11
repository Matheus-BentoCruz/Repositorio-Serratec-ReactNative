import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput } from 'react-native';

const ComponentesBasicos = () => {

   const [numero, setNumero] = useState(0);
   const [estaLigado, setEstaLigado] = useState(true);
   const [texto, setTexto] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{numero}</Text>
            <TouchableOpacity
              style={styles.botao}
              disabled={setEstaLigado}
              onPress={() => setNumero(numero + 1)}
              >
                <Text>AUMENTAR</Text>    
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => setNumero(numero - 1)}>
                <Text>DIMINUIR</Text>    
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => setNumero(0)}>
                <Text>RESETAR</Text>    
            </TouchableOpacity>
            <Switch
             value={estaLigado}
             onValueChange={setEstaLigado}
             />
             <TextInput 
               value={texto} 
               onChangeText={setTexto} 
               placeholder="Insira o seu nome"
               keyboardType='email-address' 
               style={{backgroundColor: '#343434', width: '80%'}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 50,
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: '#333',
        marginTop: 15,

    },
})

export default ComponentesBasicos;