import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { router } from 'expo-router'
import { styles } from './styles'
import { styles as globalStyles } from '../styles'
import { ButtonCustomizer } from '../../components/ButtonCustomizer'
import Sucesso from '../../assets/images/sucesso.svg'

const windowHeight = Dimensions.get('window').height
const adaptativePaddingTopScreen = Number((windowHeight * 0.2 - 50).toFixed(0))

export default function OnboardingScreen1() {
  return (
    <View
      style={[
        { paddingTop: adaptativePaddingTopScreen },
        styles.successContainer,
      ]}
    >
      <View style={{ marginBottom: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <Sucesso />
        </View>
        <Text style={styles.successTitle}>Bem vindo ao Bora Rachar!</Text>
        <View style={styles.containerText}>
          <Text style={styles.successText}>
            Lembre-se de verificar seu e-mail para receber nossas atualizações e
            notificações dos seus grupos e amigos.
          </Text>
        </View>
      </View>
      <View style={styles.button}>
        <ButtonCustomizer.Root
          type={'primary'}
          onPress={() => router.push('/')}
        >
          <ButtonCustomizer.Title
            title="Fazer login"
            customStyles={globalStyles.primaryButtonText}
          />
        </ButtonCustomizer.Root>
      </View>
    </View>
  )
}
