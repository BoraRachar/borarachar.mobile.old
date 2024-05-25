import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { Link, router } from 'expo-router'
import { styles } from '../styles'
import { styles as globalStyles } from '../../styles'
import { ButtonCustomizer } from '@/src/components/ButtonCustomizer'
import Onboarding3 from '../../../assets/images/onboarding3.svg'
import BackFrame from '../../../assets/images/backFrame.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2 - 50).toFixed(0))

export default function OnboardingScreen3() {
  return (
    <View style={{ position: 'relative' }}>
      <View style={{ padding: 6, position: 'absolute', zIndex: 1 }}>
        <Link href="../">
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
          <ButtonCustomizer.Root
            type="primary"
            onPress={() => router.push('/create-user/')}
          >
            <ButtonCustomizer.Title
              title="Criar conta"
              customStyles={globalStyles.primaryButtonText}
            />
          </ButtonCustomizer.Root>
          <View style={styles.linkContainer}>
            <View style={styles.buttonArea}>
              <View style={globalStyles.textButton}>
                <ButtonCustomizer.Root
                  type="textButton"
                  onPress={() => router.push('/')}
                >
                  <ButtonCustomizer.Title
                    title="Usar a calculadora"
                    customStyles={globalStyles.textButtonText}
                  />
                </ButtonCustomizer.Root>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
