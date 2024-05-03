import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Link } from 'expo-router'
import { styles } from '../styles'
import Onboarding3 from '../../../assets/images/onboarding3.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2).toFixed(0))

export default function OnboardingScreen3() {
  return (
    <View style={{ position: 'relative' }}>
      <View style={{ padding: 6, position: 'absolute', zIndex: 1 }}>
        <Link href="../">
          <Image
            source={require('../../../assets/images/frame-21.png')}
            alt="Seta de voltar"
          />
        </Link>
      </View>
      <View
        style={[
          { paddingTop: adaptativePaddingTopScreen },
          styles.onboardingContainer,
        ]}
      >
        <View>
          <View style={{ alignItems: 'center' }}>
            <Onboarding3 />
          </View>
          <Text style={styles.Title}>
            Crie grupos, adicione amigos e escolha o jeito que prefere dividir.
          </Text>
          <View style={styles.containerText}>
            <Text style={styles.Text}>
              Criando uma conta, você terá acesso a mais funcionalidades como
              histórico e novas modalidades de divisão.
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.Button}>
            <View style={styles.buttonArea}>
              <Text style={styles.buttonText}>Criar conta</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <Link href="/login" style={styles.buttonArea}>
              <Text style={styles.onboardingLink}>Usar a calculadora</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  )
}
