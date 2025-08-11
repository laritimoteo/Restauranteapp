import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import OptionItem from './OptionItem'; // Importa o componente separado

export default function App() {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => setShowOptions(!showOptions);

  const icons = {
    1: require('./assets/images/1.png'),
    2: require('./assets/images/2.png'),
    3: require('./assets/images/3.png'),
    4: require('./assets/images/4.png'),
  };

  return (
    <>
      {!showOptions ? (
        <ImageBackground
          source={require('./assets/images/prato.png')}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>SENÍLIA</Text>
              <Text style={styles.subtitle}>Alta Gastronomia</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={toggleOptions}>
              <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require('./assets/images/fundo1.png')}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.optionsContainer}>
            <Text style={styles.titleOptions}>Como você quer usar o app?</Text>

            <OptionItem
              icon={icons[1]}
              title="Pedir pelo Delivery"
              subtitle="Quero fazer o pedido no app e receber no meu endereço"
            />
            <OptionItem
              icon={icons[2]}
              title="Comer no Senília"
              subtitle="Vou usar cupons e benefícios para comer no Senília"
            />
            <OptionItem
              icon={icons[3]}
              title="Vou buscar o pedido"
              subtitle="Agendar para retirar meu pedido no Senília"
            />
            <OptionItem
              icon={icons[4]}
              title="Drive-Thru"
              subtitle="Quero usar o app para ver meus cupons e benefícios"
            />

            <TouchableOpacity style={styles.backButton} onPress={toggleOptions}>
              <Text style={styles.optionText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  overlay: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    justifyContent: 'center',
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#dcd4b6',
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'serif',
    
  },
  optionsContainer: {
    flex: 1,  
    padding: 30,
    justifyContent: 'center',
  },
  titleOptions: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'serif',  
  },
  backButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    
  },
  optionText: {
    fontSize: 16,
    color: '#000',
    
  },
});
