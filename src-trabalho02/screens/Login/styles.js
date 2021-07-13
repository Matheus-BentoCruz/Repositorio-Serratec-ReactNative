import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.secundary,
  },
  containerIntern: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerInternFooter: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  input: {
    minWidth: '100%',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    color: theme.colors.primary,
    textDecorationLine: 'underline',
  },
});
