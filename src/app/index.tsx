import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { View, Text, Image, Dimensions } from 'react-native'
import { styles } from './styles'
import OnboardingScreen1 from './onboarding-screens/onboarding1'

export default function Index() {
  const windowHeight = Dimensions.get('window').height
  const adaptativePaddingTopScreen = Number((windowHeight * 0.2).toFixed(0))

  const { getItem } = useAsyncStorage('isFirstTime')
  const [showOnboarding, setShowOnboarding] = useState(false)

  useEffect(() => {
    async function checkFirstTime() {
      try {
        const isFirstTime = await getItem()
        setShowOnboarding(isFirstTime === null)
      } catch (error) {
        console.error('Erro ao checar o Primeiro Acesso', error)
      }
    }
    checkFirstTime()
  }, [])

  return (
    <View>
      {showOnboarding ? (
        <OnboardingScreen1 />
      ) : (
        <View
          style={[{ paddingTop: adaptativePaddingTopScreen }, styles.container]}
        >
          <Image
            source={require('../assets/images/bora-rachar-logo.png')}
            alt="Bora Rachar?"
          />
          <View style={styles.containerButtons}>
            <Link href="/" style={styles.createAccountButton}>
              Criar minha conta
            </Link>
            <View style={styles.horizontalLineWithTextContainer}>
              <View style={styles.horizontalLine} />
              <Text style={styles.horizontalText}>OU</Text>
              <View style={styles.horizontalLine} />
            </View>

            <Link href="/login" style={styles.loginButton}>
              Fazer login
            </Link>

            <Link href="/" style={styles.calculatorButton}>
              Calculadora
            </Link>
          </View>
        </View>
      )}
    </View>
  )
}
