import React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Button } from 'react-native';

const DesafioPerfil = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imagem} source={require('../assets/images/Foto-Matheus.jpg')} />
      <View style={styles.container2}>
        <Text style={styles.texto}>Nome: Matheus Bento da Cruz</Text>
        <Text style={styles.texto}>Idade: 25 Anos</Text>
        <Text style={styles.texto}>Cidade: Teresópolis </Text>
      </View>
      <View style={styles.container4}>
        <Text style={styles.texto}>Sobre</Text>
      </View>
      <ScrollView style={styles.container3}>
        <Text style={styles.textoScrollView}>
          Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius.
          Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Atirei
          o pau no gatis, per gatis num morreus. Copo furadis é disculpa de
          bebadis, arcu quam euismod magna. Si num tem leite então bota uma
          pinga aí cumpadi! Diuretics paradis num copo é motivis de denguis.
          Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu
          levo! Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Casamentiss faiz malandris se pirulitá. A ordem dos tratores não
          altera o pão duris. Nullam volutpat risus nec leo commodo, ut interdum
          diam laoreet. Sed non consequat odio. Per aumento de cachacis, eu
          reclamis. Nec orci ornare consequat. Praesent lacinia ultrices
          consectetur. Sed non ipsum felis. Mussum Ipsum, cacilds vidis litro
          abertis. Posuere libero varius. Nullam a nisl ut ante blandit
          hendrerit. Aenean sit amet nisi. Atirei o pau no gatis, per gatis num
          morreus. Copo furadis é disculpa de bebadis, arcu quam euismod magna.
          Si num tem leite então bota uma pinga aí cumpadi! Diuretics paradis
          num copo é motivis de denguis. Todo mundo vê os porris que eu tomo,
          mas ninguém vê os tombis que eu levo! Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se
          pirulitá. A ordem dos tratores não altera o pão duris. Nullam volutpat
          risus nec leo commodo, ut interdum diam laoreet. Sed non consequat
          odio. Per aumento de cachacis, eu reclamis. Nec orci ornare consequat.
          Praesent lacinia ultrices consectetur. Sed non ipsum felis.
        </Text>
      </ScrollView>
      <View >
        <Button title="Ir para a tela do primeiro desafio!" onPress={() => navigation.navigate("Voltar para a tela de perfil")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 40,
  },
  container2: {
    marginTop: 50,
  },
  container3: {
    width: '90%',
    marginTop: 10,
  },
  container4: {
    marginTop: 20,
  },
  imagem: {
    width: 220,
    height: 220,
    borderRadius: 120,
    resizeMode: 'contain',
  },
  texto: {
    fontSize: 20,
    color: 'blue',
  },
  textoScrollView: {
    fontSize: 13,
    color: 'blue',
    textAlign: 'justify',
  },
});

export default DesafioPerfil;