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
import { useState } from 'react'
import { router } from 'expo-router'
import { useForm, Controller, FieldValues, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import PasswordInfoComponent from '@/src/components/PasswordInfoComponent'
import CloseEye from '@/src/assets/images/closeEye.svg'
import OpenEye from '@/src/assets/images/openEye.svg'
import { theme } from '@/src/theme'

import { styles } from './styles'
import Badge from '@/src/components/Badge'

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required('O campo "nova senha" não pode ser vázio')
    .matches(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
    .matches(/[0-9]/, 'Deve conter pelo menos um número')
    .matches(
      /[!@#$%^&*()_]/,
      'Deve conter pelo menos um dos caracteres: !, @, #, $, %, &, -, ...',
    )
    .min(8, 'A senha deve conter no mínimo 8 caracteres'),
  confirmPassword: yup
    .string()
    .required('O campo "Confirmar nova senha" não pode ser vázio')
    .oneOf([yup.ref('newPassword')], 'A senhas não conferem'),
})
export default function NewPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })
  const [showPassword1, setShowPassword1] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)

  const newPassword = useWatch({
    control,
    name: 'newPassword',
    defaultValue: '',
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
    router.push('/reset-password/success/')
  }

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
              {Badge(newPassword)}
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
            {errors.newPassword && (
              <Text style={styles.error}>{errors.newPassword.message}</Text>
            )}
          </View>

          <View>
            <Text style={styles.label}>Confirmar nova senha</Text>

            <Controller
              control={control}
              name="confirmPassword"
              render={({ field: { onChange, value } }) => (
                <View style={styles.input}>
                  <TextInput
                    style={styles.textInput}
                    secureTextEntry={!showPassword2}
                    value={value}
                    onChangeText={onChange}
                  />
                  <Pressable onPress={() => setShowPassword2(!showPassword2)}>
                    {!showPassword2 ? <OpenEye /> : <CloseEye />}
                  </Pressable>
                </View>
              )}
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword.message}</Text>
            )}
          </View>
        </View>
        <PasswordInfoComponent password={newPassword} />
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, { flexShrink: 1, marginBottom: 24 }]}
        onPress={handleSubmit(onSubmit)}
      >
        <Text style={styles.buttonText}>Criar nova senha</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
