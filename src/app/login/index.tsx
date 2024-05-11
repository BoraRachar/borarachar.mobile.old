import React from 'react'
import { Link, router } from 'expo-router'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { styles } from './styles'
import Header from '@/src/components/HeaderComponent/HeaderComponent'
import BackFrame from '../../assets/images/backFrame.svg'

export default function Login() {
  function handleBackToHome() {
    router.back()
  }

  const leftIcon = { icon: <BackFrame />, onPress: handleBackToHome }

  return (
    <View style={styles.container}>
      <Header title="Login" leftIcon={leftIcon} />
      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Que bom que você{'\n'}voltou!</Text>
          <Text style={styles.subTitle}>
            Faça login e comece a dividir suas contas.
          </Text>
          <View style={styles.inputsGroup}>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>E-mail ou usuário</Text>
              </View>
              <TextInput style={styles.inputField} />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Senha</Text>
              </View>
              <TextInput style={styles.inputField} secureTextEntry={true} />
            </View>
          </View>
          <Pressable onPress={() => router.push('/forgot-password/')}>
            <Text style={styles.linkForgetPassword}>Esqueceu sua senha?</Text>
          </Pressable>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.createAccountText}>
            Ainda não possui uma conta?{' '}
            <Link href="/create-user/" style={styles.createAccountButton}>
              Crie agora
            </Link>
          </Text>
        </View>
      </View>
    </View>
  )
}
