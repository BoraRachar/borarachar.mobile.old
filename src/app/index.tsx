import React, { useEffect, useState } from 'react'
import { router } from 'expo-router'
import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
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
                <TouchableOpacity
                  style={styles.primaryButton}
                  onPress={() => router.push('/create-user/')}
                >
                  <Text style={styles.primaryButtonText}>
                    Criar minha conta
                  </Text>
                </TouchableOpacity>
                <View style={styles.horizontalLineWithTextContainer}>
                  <View style={styles.horizontalLine} />
                  <Text style={styles.horizontalText}>OU</Text>
                  <View style={styles.horizontalLine} />
                </View>
                <TouchableOpacity
                  style={styles.secondaryButton}
                  onPress={() => router.push('/login/')}
                >
                  <Text style={styles.secondaryButtonText}>Fazer Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.calculatorButton}
                  onPress={() => router.push('/')}
                >
                  <Text style={styles.calculatorButtonText}>Calculadora</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </>
      )}
    </View>
  )
}
