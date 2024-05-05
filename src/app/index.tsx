import React, { useEffect, useState } from 'react'
import { Link } from 'expo-router'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { View, Text, Dimensions } from 'react-native'
import { styles } from './styles'
import OnboardingScreen1 from './onboarding-screens/onboarding1'
import Logo from '../assets/images/logo.svg'

export default function Index() {
  const windowHeight = Dimensions.get('window').height
  const adaptativePaddingTopScreen = Number((windowHeight * 0.2).toFixed(0))

  const { getItem, setItem } = useAsyncStorage('isFirstTime')
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null)
  const [isFirstTimeChecked, setIsFirstTimeChecked] = useState<boolean>(false)

  useEffect(() => {
    async function checkFirstTime() {
      const isFirstTime = await getItem()
      try {
        if (isFirstTime === null) {
          setShowOnboarding(true)
          setItem('false')
        } else {
          setShowOnboarding(false)
        }
        setIsFirstTimeChecked(true)
      } catch (error) {
        console.error('Erro ao checar o Primeiro Acesso', error)
      }
    }
    checkFirstTime()
  }, [])

  return (
    <View>
      {isFirstTimeChecked && (
        <>
          {showOnboarding === true ? (
            <OnboardingScreen1 />
          ) : (
            <View
              style={[
                { paddingTop: adaptativePaddingTopScreen },
                styles.container,
              ]}
            >
              <Logo />
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
        </>
      )}
    </View>
  )
}
