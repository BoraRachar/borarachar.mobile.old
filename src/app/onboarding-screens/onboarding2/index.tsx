import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Link, router } from 'expo-router'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
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
          <Text style={globalStyles.mainTitle}>
            Calcule quanto cada um deverá pagar.
          </Text>
          <View style={styles.containerText}>
            <Text style={globalStyles.generalText}>
              Use a nossa calculadora de divisões para despesas rápidas como uma
              de restaurante.
            </Text>
          </View>
        </View>
        <View>
          <ButtonCustomizer.Root
            type="primary"
            onPress={() => router.push('/onboarding-screens/onboarding3/')}
          >
            <ButtonCustomizer.Title
              title="E para gastos mais complexos?"
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
    </View>
  )
}
