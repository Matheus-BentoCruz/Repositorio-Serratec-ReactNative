import React from 'react';
import {Text, View, TextInput, StatusBar} from 'react-native';
import Button from './../../components/Button';
import {styles} from './styles';
import Header from '../../components/Header';

const Cadastro = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} translucent />
      <Header text={'Voltar'} voltar={() => navigation.navigate('Home')} />
      <View style={styles.containerIntern}>
        <View style={styles.boxInfo}>
          <Text style={styles.title}>Sua identificação</Text>
          <Text style={styles.text}>
            Não se preocupe! Seus dados estão seguros conosco e são necessários
            para confiar sua identidade{' '}
          </Text>
          <Text style={styles.textUnderline}>
            Porque precisamos do seu CPF?
          </Text>
        </View>
        <View style={styles.containerIntern}>
          <View style={styles.containerInput}>
            <TextInput
              style={styles.input}
              keyboardType="number-pad"
              placeholder="CPF (somente números)"
              returnKeyType={'next'}

              blurOnSubmit={false}
            />
            <TextInput
              style={styles.input}
              keyboardType="numbers-and-punctuation"
              placeholder="Data de nascimento (dd/mm/aaaa)"
              returnKeyType={'next'}
             
            />
          </View>
          <View>
            <Text style={styles.textInfo}>
              Ao criar sua conta, você concorda com nossos
              <Text style={styles.textUnderline}> Termo de Serviço</Text>
              <Text style={styles.textInfo}> e </Text>
              <Text style={styles.textUnderline}>Politica de Privacidade</Text>
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.containerInternLast}>
        <Button title="Avançar" activeOpacity={0.7} />
        <View style={styles.containerInternFooter}>
          <Text
            style={styles.textUnderline}
            onPress={() => navigation.navigate('Login')}>
            Já sou cadastrado
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Cadastro;
