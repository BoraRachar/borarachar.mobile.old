import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Link, router } from 'expo-router'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import Onboarding2 from '../../../assets/images/onboarding2.svg'
import BackFrame from '../../../assets/images/backFrame.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2 - 50).toFixed(0))

export default function OnboardingScreen2() {
  return (
    <View style={{ position: 'relative' }}>
      <View style={{ padding: 6, position: 'absolute', zIndex: 1 }}>
        <Link href="/onboarding-screens/onboarding1/">
          <BackFrame />
        </Link>
      </View>
      <View
        style={[
          { paddingTop: adaptativePaddingTopScreen },
          styles.onboardingContainer,
        ]}
      >
        <View style={{ marginBottom: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <Onboarding2 />
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
          <TouchableOpacity
            style={globalStyles.primaryButton}
            onPress={() => router.push('/onboarding-screens/onboarding3/')}
          >
            <Text style={globalStyles.primaryButtonText}>
              E para gastos mais complexos?
            </Text>
          </TouchableOpacity>
          <View style={styles.linkContainer}>
            <View style={styles.buttonArea}>
              <View style={globalStyles.textButton}>
                <Link push href="/">
                  <Text style={globalStyles.textButtonText}>Pular</Text>
                </Link>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
