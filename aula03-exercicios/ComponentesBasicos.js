import React, {useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ComponentesBasicos = () => {

   const [numero, setNumero] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{numero}</Text>
            <View style={styles.container2}>
                <Button title="Aumentar" onPress={() => setNumero( numero + 1 )} />
            </View>
            <View style={styles.container2}>
                <Button title="Diminuir" onPress={() => setNumero( numero - 1 )} />
            </View>
            <View style={styles.container2}>
                <Button title="resetar" onPress={() => setNumero(0)} />
            </View>
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
        fontSize: 78,
    },
    container2: {
        width: '80%',
        marginTop: '2%',
    }
})

export default ComponentesBasicos;