import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import OptionItem from './OptionItem';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('start');

  const icons = {
    1: require('./assets/images/1.png'),
    2: require('./assets/images/2.png'),
    3: require('./assets/images/3.png'),
    4: require('./assets/images/4.png'),
  };

  return (
    <>
      {/* Tela 1: Tela inicial com imagem de prato */}
      {currentScreen === 'start' && (
        <ImageBackground
          source={require('./assets/images/prato.png')}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>SENÍLIA</Text>
              <Text style={styles.subtitle}>Alta Gastronomia</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setCurrentScreen('intro')}
              >
                <Text style={styles.buttonText}>Começar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      )}

      {/* Tela 2: Boas-vindas e login */}
      {currentScreen === 'intro' && (
        <View style={styles.introContainer}>
          <TouchableOpacity
            onPress={() => setCurrentScreen('start')}
            style={styles.backArrow}
          >
            <Text style={styles.backArrowText}>←</Text>
          </TouchableOpacity>

          <Image
            source={require('./assets/images/logo.png')} // Seu logo local
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.brand}>SENÍLIA</Text>
          <Text style={styles.introTitle}>Alta Gastronomia</Text>
          <Text style={styles.introDesc}>
            Onde o fogo e a culinária se encontram em pratos inspiradores
          </Text>

          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Quero me cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appleButton}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/2/2235.png',
              }}
              style={styles.appleIcon}
              resizeMode="contain"
            />
            <Text style={styles.appleButtonText}>Continuar com a Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>Já sou cadastrado</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCurrentScreen('options')}>
            <Text style={styles.link}>Permanecer desconectado</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Tela 3: Opções do app */}
      {currentScreen === 'options' && (
        <View style={[styles.background, { backgroundColor: '#8fa7a3' }]}>
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

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setCurrentScreen('intro')}
            >
              <Text style={styles.optionText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    fontFamily: 'serif',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    color: '#000',
    fontSize: 18,
    fontFamily: 'serif',
    textAlign: 'left',
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#dcd4b6',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'serif',
  },

  // Tela 2
  introContainer: {
    flex: 1,
    backgroundColor: '#edf2ed',
    paddingHorizontal: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 50,
    left: 25,
  },
  backArrowText: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 25,
  },
  brand: {
    color: '#65908d',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'serif',
    marginBottom: 4,
    letterSpacing: 1,
  },
  introTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: '#000',
    marginBottom: 12,
  },
  introDesc: {
    textAlign: 'center',
    fontSize: 15,
    color: '#000',
    marginBottom: 20,
    fontFamily: 'serif',
    paddingHorizontal: 10,
  },
  greenButton: {
    backgroundColor: '#65908d',
    paddingVertical: 13,
    borderRadius: 22,
    width: '100%',
    alignItems: 'center',
    marginVertical: 6,
  },
  greenButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'serif',
  },
  appleButton: {
    flexDirection: 'row',
    backgroundColor: '#b8853f',
    paddingVertical: 13,
    borderRadius: 22,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  appleIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  appleButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'serif',
  },
  link: {
    marginTop: 18,
    color: '#000',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
    fontSize: 14,
  },

  // Tela 3
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
