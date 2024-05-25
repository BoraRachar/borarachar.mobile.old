import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { router } from 'expo-router'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import { styles as globalStyles } from '../../styles'
import { styles } from '../styles'
import Onboarding1 from '../../../assets/images/onboarding1.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2 - 50).toFixed(0))

export default function OnboardingScreen1() {
  return (
    <View
      style={[
        { paddingTop: adaptativePaddingTopScreen },
        styles.onboardingContainer,
      ]}
    >
      <View style={{ marginBottom: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Onboarding1 />
        </View>
        <Text style={styles.Title}>Rápido, fácil e seguro.</Text>
        <View style={styles.containerText}>
          <Text style={styles.Text}>Dividir as contas é moleza!</Text>
          <Text style={styles.Text}>
            Basta adicionar as pessoas, escolher o pronto! O aplicativo faz o
            resto.
          </Text>
        </View>
      </View>
      <View>
        <ButtonCustomizer.Root
          type="primary"
          onPress={() => router.push('/onboarding-screens/onboarding2/')}
        >
          <ButtonCustomizer.Title
            title="Como funciona?"
            customStyles={globalStyles.primaryButtonText}
          />
        </ButtonCustomizer.Root>
        <View style={styles.linkContainer}>
          <View style={styles.buttonArea}>
            <ButtonCustomizer.Root
              type="textButton"
              onPress={() => router.push('/')}
            >
              <ButtonCustomizer.Title
                title="Pular"
                customStyles={globalStyles.textButtonText}
              />
            </ButtonCustomizer.Root>
          </View>
        </View>
      </View>
    </View>
  )
}
