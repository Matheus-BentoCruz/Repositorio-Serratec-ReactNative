import { View, StyleSheet, Image } from 'react-native';

const ComponentesBasicos = () => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          widith: 220,
          height: 220,
          borderRadius: 120,
         resizeMode: 'contain',
        }}
        source={require('../assets/images/react-native.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ComponentesBasicos;