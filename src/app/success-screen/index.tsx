import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Link } from 'expo-router'
import { styles } from './styles'
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
        <TouchableOpacity>
          <View style={styles.buttonArea}>
            <Link push href="/">
              <Text style={styles.buttonText}>Fazer login</Text>
            </Link>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
