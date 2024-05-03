import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Link } from 'expo-router'
import { styles } from '../styles'
import Onboarding1 from '../../../assets/images/onboarding1.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2).toFixed(0))

export default function OnboardingScreen1() {
  return (
    <View
      style={[
        { paddingTop: adaptativePaddingTopScreen },
        styles.onboardingContainer,
      ]}
    >
      <View>
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
        <TouchableOpacity style={styles.Button}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttonText}>Como funciona?</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.linkContainer}>
          <Link
            href="/onboarding-screens/onboarding2/"
            style={styles.buttonArea}
          >
            <Text style={styles.onboardingLink}>Pular</Text>
          </Link>
        </View>
      </View>
    </View>
  )
}
