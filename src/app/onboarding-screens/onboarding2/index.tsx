import React from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Link } from 'expo-router'
import { styles } from '../styles'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2).toFixed(0))

export default function Onboarding2() {
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
            <Image
              source={require('../../../assets/images/onboarding3.png')}
              alt="Imagem de celular e vários usuários"
            />
          </View>
          <Text style={styles.Title}>Calcule quanto cada um deverá pagar.</Text>
          <View style={styles.containerText}>
            <Text style={styles.Text}>
              Use a nossa calculadora de divisões para despesas rápidas como uma
              de restaurante.
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.Button}>
            <View style={styles.buttonArea}>
              <Text style={styles.buttonText}>
                E para gastos mais complexos?
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <Link
              href="/onboarding-screens/onboarding3/"
              style={styles.buttonArea}
            >
              <Text style={styles.onboardingLink}>Pular</Text>
            </Link>
          </View>
        </View>
      </View>
    </View>
  )
}
