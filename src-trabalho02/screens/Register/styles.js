import {StyleSheet} from 'react-native';
import theme from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: theme.colors.secundary,
  },
  title: {
    fontSize: 24,
    color: theme.colors.titleblack,
  },
  containerIntern: {
    flex: 1,
    alignItems: 'center',
  },
  containerInternLast: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  containerInternFooter: {
    justifyContent: 'space-around',
    marginVertical: '2%',
    paddingVertical: '5%',
  },
  input: {
    minWidth: '100%',
    borderColor: theme.colors.titleblack,
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
  },
  input2: {
    minWidth: '100%',
    borderColor: theme.colors.titleblack,
    borderWidth: 1.5,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    borderColor: 'red',
  },
  boxInfo: {
    height: '40%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  textUnderline: {
    color: theme.colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontSize: 15,
  },
  text: {
    color: theme.colors.titleblack,
    textAlign: 'center',
    fontSize: 14,
  },

  containerInput: {
    width: '100%',
    height: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  textInfo: {
    paddingHorizontal: '5%',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 15,
    color: theme.colors.titleblack,
  },
});
