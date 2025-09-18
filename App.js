import React, { useState } from 'react';
import { ScrollView } from 'react-native';
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
    const [selectedCategory, setSelectedCategory] = useState('Recomendados');
  
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
    {/* Botão de voltar */}
    <TouchableOpacity
      onPress={() => setCurrentScreen('start')}
      style={styles.backArrow}
    >
      <Text style={styles.backArrowText}>←</Text>
    </TouchableOpacity>

    {/* Parte de cima */}
    <View style={styles.introTop}>
    <Image
  source={require('./assets/images/logo.png')}
  style={styles.logoIntro}
/>

      <Text style={styles.brand}>SENÍLIA</Text>
      <Text style={styles.introTitle}>Alta Gastronomia</Text>
      <Text style={styles.introDesc}>
        Onde o fogo e a culinária se encontram em pratos inspiradores
      </Text>
    </View>

    {/* Botões embaixo */}
    <View style={styles.introBottom}>
      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.greenButtonText}>Quero me cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.appleButton}>
  
  <Text style={styles.appleButtonText}>Continuar com a Apple </Text>
  <Image
    source={require('./assets/images/apple.png')} 
    style={styles.appleIcon}
    resizeMode="contain"
  />
</TouchableOpacity>


      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.greenButtonText}>Já sou cadastrado</Text>
      </TouchableOpacity>

    
      <TouchableOpacity onPress={() => setCurrentScreen('options')}>
        <Text style={styles.link}>Permanecer desconectado</Text>
      </TouchableOpacity>
    </View>
  </View>
)}
      {/* Tela 3: Opções do app */}
      {currentScreen === 'options' && (
        <View style={styles.optionsContainer}>
          <Text style={styles.titleOptions}>Como você quer usar o app?</Text>

          <TouchableOpacity
            style={styles.optionCard}
            onPress={() => setCurrentScreen('delivery')}
          >
            <View style={styles.iconBox}>
              <Image source={icons[1]} style={styles.optionIcon} />
            </View>
            <View style={styles.optionTextBox}>
              <Text style={styles.optionTitle}>Pedir pelo Delivery</Text>
              <Text style={styles.optionSubtitle}>
                Quero fazer o pedido no app e receber no meu endereço
              </Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.iconBox}>
              <Image source={icons[2]} style={styles.optionIcon} />
            </View>
            <View style={styles.optionTextBox}>
              <Text style={styles.optionTitle}>Comer no Senília</Text>
              <Text style={styles.optionSubtitle}>
                Vou usar cupons e benefícios para comer no Senília
              </Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.iconBox}>
              <Image source={icons[3]} style={styles.optionIcon} />
            </View>
            <View style={styles.optionTextBox}>
              <Text style={styles.optionTitle}>Vou buscar o pedido</Text>
              <Text style={styles.optionSubtitle}>
                Agendar para retirar meu pedido no Senília
              </Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.iconBox}>
              <Image source={icons[4]} style={styles.optionIcon} />
            </View>
            <View style={styles.optionTextBox}>
              <Text style={styles.optionTitle}>Drive-Thru</Text>
              <Text style={styles.optionSubtitle}>
                Quero usar o app para ver meus cupons e benefícios
              </Text>
            </View>
            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>

          {/* Seta de voltar no topo */}
<TouchableOpacity
  style={styles.backArrow}
  onPress={() => setCurrentScreen('intro')}
>
  <Text style={styles.backArrowText}>‹</Text>
</TouchableOpacity>

        </View>
      )}


  {/* tela 4 */}
      
  {currentScreen === 'delivery' && (
    <View style={styles.deliveryContainer}>
    
    {/* Botão de voltar */}
    <TouchableOpacity
      style={styles.backArrow}
      onPress={() => setCurrentScreen('intro')}
    >
      <Text style={styles.backArrowText}>‹</Text>
    </TouchableOpacity>

    {/* Cabeçalho com endereço e logo */}
    <View style={styles.deliveryHeader}>
      <View style={styles.addressSection}>
        <View style={styles.addressTitleRow}>
          <Text style={styles.addressTitle}>Endereço</Text>
        </View>

        <TouchableOpacity style={styles.addressRegisterRow}>
          <Image
            source={require('./assets/images/location-icon.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.addressRegisterText}>Cadastre seu endereço</Text>
          <Text style={styles.downArrow}>▼</Text>
        </TouchableOpacity>

        <View style={styles.separator} />
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/images/logo.png')}
          style={styles.logoDelivery}
        />
      </View>
    </View>

    {/* Imagens de pratos (exemplo estático) */}
    <View style={styles.imageRow}>
      <Image
        source={require('./assets/images/EntradinhasCamarão.png')}
        style={styles.dishImage1}
        resizeMode="cover"
      />
      <Image
        source={require('./assets/images/LagostaArroz.png')}
        style={styles.dishImage1}
        resizeMode="cover"
      />
    </View>

  {/* Navegação por categorias */}
<View style={styles.categoryNav}>
      {['Recomendados', 'Entradas', 'Prato Principal', 'Sobremesas'].map((category) => (
        <TouchableOpacity key={category} onPress={() => setSelectedCategory(category)}>
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategory
            ]}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

{/* Lista dos pratos */}
<ScrollView style={styles.dishList} showsVerticalScrollIndicator={false}>
  {selectedCategory === 'Recomendados' && (
    <>
      {/* Prato 1 */}
      <View style={styles.dishItem}>
        <Image source={require('./assets/images/LagostaArroz.png')} style={styles.dishImage} />
        <View style={styles.dishInfo}>
          <Text style={styles.dishTitle}>Lagosta com Arroz</Text>
          <Text style={styles.dishDescription}>
            Lagosta grelhada com alho na manteiga, servida sobre arroz cremoso.
          </Text>
          <Text style={styles.dishPrice}>R$ 197,00</Text>
          <View style={styles.actionsRow}>
            <View style={styles.buttonAndCart}>
              <TouchableOpacity style={styles.dishButton}>
                <Text style={styles.dishButtonText}>Até 6 pessoas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Prato 2 */}
      <View style={styles.dishItem}>
        <Image source={require('./assets/images/r2.png')} style={styles.dishImage} />
        <View style={styles.dishInfo}>
          <Text style={styles.dishTitle}>Camarão Imperial</Text>
          <Text style={styles.dishDescription}>
            Camarões grelhados no azeite de ervas com purê de batata-doce e farofa crocante.
          </Text>
          <Text style={styles.dishPrice}>R$ 158,00</Text>
          <View style={styles.actionsRow}>
            <View style={styles.buttonAndCart}>
              <TouchableOpacity style={styles.dishButton}>
                <Text style={styles.dishButtonText}>Até 4 pessoas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Prato 3 */}
      <View style={styles.dishItem}>
        <Image source={require('./assets/images/r3.png')} style={styles.dishImage} />
        <View style={styles.dishInfo}>
          <Text style={styles.dishTitle}>Polvo Mediterrâneo</Text>
          <Text style={styles.dishDescription}>
            Polvo grelhado ao molho de vinho branco com batatas rústicas e azeite trufado.
          </Text>
          <Text style={styles.dishPrice}>R$ 174,00</Text>
          <View style={styles.actionsRow}>
            <View style={styles.buttonAndCart}>
              <TouchableOpacity style={styles.dishButton}>
                <Text style={styles.dishButtonText}>Até 3 pessoas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Prato 4 */}
      <View style={styles.dishItem}>
        <Image source={require('./assets/images/r4.png')} style={styles.dishImage} />
        <View style={styles.dishInfo}>
          <Text style={styles.dishTitle}>Risotto Nero</Text>
          <Text style={styles.dishDescription}>
            Risoto cremoso de tinta de lula com polvo grelhado e azeite siciliano.
          </Text>
          <Text style={styles.dishPrice}>R$ 142,00</Text>
          <View style={styles.actionsRow}>
            <View style={styles.buttonAndCart}>
              <TouchableOpacity style={styles.dishButton}>
                <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Prato 5 */}
      <View style={styles.dishItem}>
        <Image source={require('./assets/images/r5.png')} style={styles.dishImage} />
        <View style={styles.dishInfo}>
          <Text style={styles.dishTitle}>Salmão Siciliano</Text>
          <Text style={styles.dishDescription}>
            Salmão grelhado com molho cítrico de limão siciliano e legumes frescos.
          </Text>
          <Text style={styles.dishPrice}>R$ 139,00</Text>
          <View style={styles.actionsRow}>
            <View style={styles.buttonAndCart}>
              <TouchableOpacity style={styles.dishButton}>
                <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Prato 6 */}
      <View style={styles.dishItem}>
        <Image source={require('./assets/images/r6.png')} style={styles.dishImage} />
        <View style={styles.dishInfo}>
          <Text style={styles.dishTitle}>Tonno in Crosta di Pistacchi</Text>
          <Text style={styles.dishDescription}>
            Atum selado em crosta de pistache, acompanhado de creme de limão siciliano.
          </Text>
          <Text style={styles.dishPrice}>R$ 185,00</Text>
          <View style={styles.actionsRow}>
            <View style={styles.buttonAndCart}>
              <TouchableOpacity style={styles.dishButton}>
                <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  )}

{selectedCategory === 'Entradas' && (
  <>
    {/* Entrada 1 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/e1.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Tartar di Mare Fresco</Text>
        <Text style={styles.dishDescription}>
          Tartar de atum fresco com guacamole e crocante de gergelim.
        </Text>
        <Text style={styles.dishPrice}>R$ 68,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 1 pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Entrada 2 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/e2.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Bruschetta alla Truffle</Text>
        <Text style={styles.dishDescription}>
          Pão rústico com tomates frescos, manjericão e azeite trufado.
        </Text>
        <Text style={styles.dishPrice}>R$ 42,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 1 pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Entrada 3 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/e3.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Risotto di Funghi Selvatici</Text>
        <Text style={styles.dishDescription}>
          Risoto de cogumelos selvagens e queijo parmesão, leve toque de trufas.
        </Text>
        <Text style={styles.dishPrice}>R$ 89,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Entrada 4 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/e4.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Ravioli della Campagna</Text>
        <Text style={styles.dishDescription}>
          Ravioli recheado com ricota e espinafre, servido com molho de tomate e manjericão.
        </Text>
        <Text style={styles.dishPrice}>R$ 75,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Entrada 5 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/e5.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Carpaccio di Manzo</Text>
        <Text style={styles.dishDescription}>
          Finas fatias de carne bovina, azeite trufado, lascas de parmesão e rúcula.
        </Text>
        <Text style={styles.dishPrice}>R$ 92,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Entrada 6 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/e6.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Crema di Zucca</Text>
        <Text style={styles.dishDescription}>
          Creme de abóbora com toque de gengibre e finalização com creme de leite fresco.
        </Text>
        <Text style={styles.dishPrice}>R$ 55,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 1 pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </>
)}

{selectedCategory === 'Prato Principal' && (
  <>
    {/* Prato 1 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p1.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Filé Mignon ao Vinho</Text>
        <Text style={styles.dishDescription}>
          Filé mignon grelhado, servido com molho de vinho tinto, purê de batata trufado e legumes assados.
        </Text>
        <Text style={styles.dishPrice}>R$ 165,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 2 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p2.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Risoto de Frutos do Mar</Text>
        <Text style={styles.dishDescription}>
          Risoto cremoso com camarões, mexilhões e polvo, finalizado com um toque de limão siciliano.
        </Text>
        <Text style={styles.dishPrice}>R$ 148,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 3 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p3.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Picanha de Cordeiro</Text>
        <Text style={styles.dishDescription}>
          Corte de picanha de cordeiro grelhado, com molho de hortelã e couscous marroquino.
        </Text>
        <Text style={styles.dishPrice}>R$ 172,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 4 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p4.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Pescada Amarela ao Molho de Alho</Text>
        <Text style={styles.dishDescription}>
          Pescada amarela grelhada, servida com molho de alho e batatas assadas.
        </Text>
        <Text style={styles.dishPrice}>R$ 139,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 1 pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 5 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p5.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Tagliatelle Trufado</Text>
        <Text style={styles.dishDescription}>
          Massa fresca de tagliatelle, com molho cremoso de trufas negras e parmesão.
        </Text>
        <Text style={styles.dishPrice}>R$ 128,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 1 pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 6 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p6.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Linguine com Lagosta</Text>
        <Text style={styles.dishDescription}>
          Linguine fresco servido com lagosta, azeite de oliva e toque de pimenta rosa.
        </Text>
        <Text style={styles.dishPrice}>R$ 196,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 2 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 7 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p7.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Frango Assado ao Mel e Alecrim</Text>
        <Text style={styles.dishDescription}>
          Peito de frango assado, com molho de mel e alecrim, acompanhado de batatas rústicas.
        </Text>
        <Text style={styles.dishPrice}>R$ 118,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 1 pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 8 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p8.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Tomahawk Steak</Text>
        <Text style={styles.dishDescription}>
          Corte premium de tomahawk steak grelhado, acompanhado de molho barbecue caseiro e legumes grelhados.
        </Text>
        <Text style={styles.dishPrice}>R$ 245,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 3 pessoas</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Prato 9 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/p9.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Salmão Grelhado</Text>
        <Text style={styles.dishDescription}>
          Salmão fresco grelhado, servido com molho de limão e mostarda, acompanhado de arroz basmati e brócolis ao vapor.
        </Text>
        <Text style={styles.dishPrice}>R$ 142,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Até 1 pessoa</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </>
)}

{selectedCategory === 'Sobremesas' && (
  <>
    {/* Sobremesa 1 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s1.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Tiramisù D’Oro</Text>
        <Text style={styles.dishDescription}>
          Clássico tiramisù com camadas de mascarpone e café espresso.
        </Text>
        <Text style={styles.dishPrice}>R$ 42,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 2 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s2.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Mousse Noir</Text>
        <Text style={styles.dishDescription}>
          Mousse de chocolate belga com toque de baunilha de Madagascar.
        </Text>
        <Text style={styles.dishPrice}>R$ 36,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 3 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s3.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Cheesecake du Château</Text>
        <Text style={styles.dishDescription}>
          Cheesecake cremoso com calda de frutas vermelhas frescas.
        </Text>
        <Text style={styles.dishPrice}>R$ 39,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 4 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s4.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Pavlova Étoile</Text>
        <Text style={styles.dishDescription}>
          Merengue crocante com chantilly e seleção de frutas tropicais.
        </Text>
        <Text style={styles.dishPrice}>R$ 44,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 5 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s5.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Petit Gâteau</Text>
        <Text style={styles.dishDescription}>
          Bolo de chocolate quente com recheio cremoso e sorvete artesanal.
        </Text>
        <Text style={styles.dishPrice}>R$ 41,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 6 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s6.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Crème Brûlée Dourado</Text>
        <Text style={styles.dishDescription}>
          Creme de baunilha com cobertura caramelizada na hora.
        </Text>
        <Text style={styles.dishPrice}>R$ 38,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 7 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s7.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Torta Banoffee</Text>
        <Text style={styles.dishDescription}>
          Torta de banana, doce de leite e chantilly caseiro.
        </Text>
        <Text style={styles.dishPrice}>R$ 40,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 8 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s8.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Panna Cotta Perla</Text>
        <Text style={styles.dishDescription}>
          Panna cotta de baunilha com calda de frutas silvestres.
        </Text>
        <Text style={styles.dishPrice}>R$ 37,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

    {/* Sobremesa 9 */}
    <View style={styles.dishItem}>
      <Image source={require('./assets/images/s9.jpg')} style={styles.dishImage} />
      <View style={styles.dishInfo}>
        <Text style={styles.dishTitle}>Mousse de Framboesas</Text>
        <Text style={styles.dishDescription}>
          Mousse de chocolate amargo, com framboesas frescas e uma leve calda de frutas vermelhas.
        </Text>
        <Text style={styles.dishPrice}>R$ 39,00</Text>
        <View style={styles.actionsRow}>
          <View style={styles.buttonAndCart}>
            <TouchableOpacity style={styles.dishButton}>
              <Text style={styles.dishButtonText}>Individual</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('./assets/images/carrinho.png')} style={styles.cartIconLarge} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </>
)}



</ScrollView>

    
     {/* MENU INFERIOR FIXO */}
     <View style={styles.bottomTab}>
      <View style={styles.tabRow}>
        {/* Início */}
        <TouchableOpacity style={styles.tabItem} onPress={() => setCurrentScreen('start')}>
          <Image
            source={require('./assets/images/home.png')}
            style={styles.tabIcon}
          />
          <Text style={styles.tabLabel}>Início</Text>
        </TouchableOpacity>

        {/* Pedidos */}
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={require('./assets/images/orders.png')}
            style={styles.tabIcon}
          />
          <Text style={styles.tabLabel}>Pedidos</Text>
        </TouchableOpacity>

        {/* Perfil */}
        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={require('./assets/images/profile.png')}
            style={styles.tabIcon}
          />
          <Text style={styles.tabLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 100,   
    paddingBottom: 10, 
    
    
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
  introTop: {
    alignItems: 'center',
    marginTop: 40,
  },
  introBottom: {
    width: '100%',
  },
  logoIntro: {
    width: 200,
    height: 160,
    marginBottom: 20,
    resizeMode: 'contain',
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
    textAlign: 'center',
  },

  appleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  

    // Tela 3
  optionsContainer: {
    flex: 1,
    padding: 25,
    backgroundColor: '#edf2ed',
    paddingHorizontal: 35,
    paddingTop: 220,   
    paddingBottom: 10, 
    alignItems: 'center',
  },
  titleOptions: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    fontFamily: 'serif',
  },
  optionCard: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 15,
  marginBottom: 18,
  width: '100%',   // 👈 agora ocupa toda a largura útil
  elevation: 3,
  shadowColor: '#000',
  shadowOpacity: 0.1,
  shadowRadius: 3,
  shadowOffset: { width: 0, height: 2 },
},
  iconBox: {
    backgroundColor: '#8fa7a3',
    padding: 12,
    borderRadius: 4,
    marginRight: 12,
  },
  optionIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  optionTextBox: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: 'serif',
  },
  optionSubtitle: {
    fontSize: 13,
    color: '#333',
    marginTop: 2,
    fontFamily: 'serif',
  },
  arrow: {
    fontSize: 18,
    color: '#000',
  },
  backArrow: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
  },
  backArrowText: {
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold',
  },
  


  // Tela 4
  deliveryContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },

  deliveryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  addressSection: {
    flex: 1,
    paddingHorizontal: 0, // tira o padding lateral pra linha ir até a borda
  },

  addressTitleRow: {
    marginBottom: 5,
  },

  addressTitle: {
    fontFamily: 'serif',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 50, 
    
  },

  addressRegisterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },

  addressRegisterText: {
    fontFamily: 'serif',
    fontSize: 14,
    color: '#555',
  },

  downArrow: {
    fontSize: 12,
    color: '#555',
    marginLeft: 5,
  },

  separator: {
  height: 1,
  backgroundColor: '#ccc',
  marginTop: 10,
  alignSelf: 'stretch', // força esticar se precisar
},


  logoContainer: {
    marginLeft: 20,
    width: 100,        // aumentar um pouco a largura do container
    height: 100,       // altura para garantir espaço
    justifyContent: 'center',  // centraliza verticalmente
    alignItems: 'center',      // centraliza horizontalmente
  },
  
  logoDelivery: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  

  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,  // aqui adiciona o espaço pra baixo
  },
  

  dishImage1: {
    width: '48%',
    height: 150,
    borderRadius: 10,
    
  },
  categoryNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  
  categoryText: {
    fontFamily: 'Times New Roman',
    fontSize: 14,
    color: '#000',
  },
  
  selectedCategory: {
    fontWeight: 'bold',
    color: '#a57c00',
    borderBottomWidth: 2,
    borderBottomColor: '#a57c00',
    paddingBottom: 3,
  },
  bottomTab: {
    backgroundColor: '#e9f5f5',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 4,
  },
  
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  
  tabItem: {
    alignItems: 'center',
  },
  
  tabIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginBottom: 4,
  },
  
  tabLabel: {
    fontSize: 12,
    color: '#000',
  },
  
  dishList: {
    marginVertical: 20,
  },
  
  dishItem: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  
  dishImage: {
    width: 110,
    height: 100,
    borderRadius: 10,
    marginRight: 15,
  },
  
  dishInfo: {
    flex: 1,
  },
  
  dishTitle: {
    fontFamily: 'serif',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  
  dishDescription: {
    fontFamily: 'serif',
    fontSize: 13,
    color: '#555',
    marginBottom: 8,
  },
  
  dishPrice: {
    fontFamily: 'serif',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  
  dishButton: {
    backgroundColor: '#809a97',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: 'flex-start',
  },
  
  dishButtonText: {
    fontFamily: 'serif',
    color: '#fff',
    fontSize: 12,
  },
  actionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  
  dishButton: {
    backgroundColor: '#333',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  
  dishButton: {
    backgroundColor: '#809a97', // cor da imagem
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  cartIconLarge: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
    marginLeft: 8,
  },

  buttonAndCart: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  
  // carrinho icon
  cartIconLarge: {
    width: 2,
    height: 26,
    resizeMode: 'contain',
    marginLeft: 8,
  },
  
  
});
