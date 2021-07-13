import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.background,
  },
  containerText: {
    height: '90%',
    justifyContent: 'flex-end',
    marginHorizontal: 30,
  },
  text: {
    fontSize: 28,
    textAlign: 'left',
    color: theme.colors.secundary,
  },
  containerIcon: {
    width: '95%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
