import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { router } from 'expo-router'
import { useForm, Controller, useWatch } from 'react-hook-form'

import CloseEye from '@/src/assets/images/closeEye.svg'
import OpenEye from '@/src/assets/images/openEye.svg'

import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'
import { useState } from 'react'
import PasswordInfoComponent from '@/src/components/PasswordInfoComponent'

export default function NewPassword() {
  const { control } = useForm()
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const newPassword = useWatch({
    control,
    name: 'newPassword',
    defaultValue: '',
  })

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subTitle}>Redefina sua senha</Text>
        <Text style={styles.description}>
          Siga as instruções abaixo para criar uma senha segura para a sua
          conta.
        </Text>

        <View style={styles.inputContainer}>
          <View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Nova Senha</Text>
              <View style={styles.badge}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={18}
                  color={theme.colors.Success500}
                />
                <Text style={styles.badgeText}>Forte</Text>
              </View>
            </View>

            <Controller
              control={control}
              name="newPassword"
              render={({ field: { onChange, value } }) => (
                <View style={styles.input}>
                  <TextInput
                    style={styles.textInput}
                    placeholderTextColor={theme.colors.secondary}
                    cursorColor={theme.colors.tertiary}
                    secureTextEntry={!showPassword1}
                    value={value}
                    onChangeText={onChange}
                  />
                  <Pressable onPress={() => setShowPassword1(!showPassword1)}>
                    {!showPassword1 ? <OpenEye /> : <CloseEye />}
                  </Pressable>
                </View>
              )}
            />
          </View>

          <View>
            <Text style={styles.label}>Confirmar nova senha</Text>

            <View style={styles.input}>
              <TextInput
                style={styles.textInput}
                secureTextEntry={!showPassword2}
              />
              <Pressable onPress={() => setShowPassword2(!showPassword2)}>
                {!showPassword2 ? <OpenEye /> : <CloseEye />}
              </Pressable>
            </View>
          </View>
        </View>
        <PasswordInfoComponent password={newPassword} />
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, { flexShrink: 1, marginBottom: 24 }]}
        onPress={() => router.push('/reset-password/sucess')}
      >
        <Text style={styles.buttonText}>Criar nova senha</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
