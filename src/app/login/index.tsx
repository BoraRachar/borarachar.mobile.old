import React, { useState } from 'react'
import { Link, useRouter } from 'expo-router'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { styles } from './styles'

import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from '../../theme/colors'

export default function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true)
  const router = useRouter()

  function handleBackToHome() {
    router.back()
  }

  function changePasswordVisibility() {
    setIsPasswordVisible(() => !isPasswordVisible)
  }

  function handleLogin() {}

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerBackButton}
            onPress={handleBackToHome}
            activeOpacity={0}
          >
            <Ionicons name="arrow-back" size={20} color={colors.primary} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Login</Text>
        </View>

        <Text style={styles.title}>Que bom que você</Text>
        <Text style={styles.title}>voltou!</Text>

        <Text style={styles.subtitle}>
          Faça login e comece a dividir suas contas.
        </Text>

        <View style={styles.inputsGroup}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>E-mail ou Usuário</Text>
            <TextInput
              style={styles.inputField}
              selectionColor={colors.primary}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <View>
              <TextInput
                style={styles.inputField}
                secureTextEntry={!isPasswordVisible}
                selectionColor={colors.primary}
              />

              {isPasswordVisible ? (
                <Ionicons
                  style={styles.eyeIcon}
                  onPress={changePasswordVisibility}
                  name="eye-outline"
                  size={24}
                  color={colors.primary}
                />
              ) : (
                <Ionicons
                  style={styles.eyeIcon}
                  onPress={changePasswordVisibility}
                  name="eye-off-outline"
                  size={24}
                  color={colors.primary}
                />
              )}
            </View>
          </View>
        </View>

        <Link href="/" style={styles.linkForgetPassword}>
          Esqueceu sua senha?
        </Link>

        <View style={styles.linkForgetPasswordLineBottom} />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginTextButton}>Login</Text>
        </TouchableOpacity>

        <Pressable
          onPress={() => router.push('/')}
          style={styles.createAccountButton}
        >
          <Text>Criar conta</Text>
        </Pressable>
      </View>
    </View>
  )
}
