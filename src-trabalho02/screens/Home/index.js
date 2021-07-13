import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {styles} from './styles';
import Button from '../../components/Button';
import ButtonSecundary from '../../components/ButtonSecundary';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import theme from '../../global/theme';

const Home = ({navigation}) => {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <ImageBackground
        source={require('../../assets/background.jpeg')}
        style={styles.img}>
        <View style={styles.containerText}>
          <Text style={styles.text}>
            Com o PicPay seus {` `} pagamentos são mais{` `}
            simples e seguros.
          </Text>
          <Button
            title="Cadastrar"
            activeOpacity={0.9}
            cadastrar={() => navigation.navigate('Register')}
          />
          <ButtonSecundary
            title="Entrar"
            entrar={() => navigation.navigate('Login')}
          />
        </View>
        <View style={styles.containerIcon}>
          <Icon name="question" size={25} color={theme.colors.secundary} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
