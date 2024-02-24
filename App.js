import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Button from './components/Button';
import ProyectForm from './components/ProyectForm'; 
import ManageForm from './components/ManageForm';
const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ManageForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    width: '25%',
  },
});

export default App;
