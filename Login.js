import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Button from './components/Button';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <LoginForm />
      <Button onPress={() => console.log('Botón presionado')} label="Enter" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'linear-gradient(135deg, #FFF4D6 0%, #EFE3D3 100%)',
  },
});

export default App;
