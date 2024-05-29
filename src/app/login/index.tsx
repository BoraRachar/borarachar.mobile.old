import { useState } from 'react'
import { Link, router } from 'expo-router'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { useForm, Controller, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styles } from './styles'
import { styles as globalStyles } from '../styles'
import Header from '@/src/components/HeaderComponent/HeaderComponent'
import BackFrame from '../../assets/images/backFrame.svg'
import OpenEye from '../../assets/images/openEye.svg'
import CloseEye from '../../assets/images/closeEye.svg'
import { axiosClient } from '@/src/utils/axios'
import { ErrorResponse } from '@/src/interfaces/types'
import { AxiosError } from 'axios'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('O campo deve ser preenchido'),
    senha: yup.string().required('O campo deve ser preenchido'),
  })
  .required()
export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  function handleBackToHome() {
    router.back()
  }

  const leftIcon = { icon: <BackFrame />, onPress: handleBackToHome }

  const handleLogin = async (data: FieldValues) => {
    try {
      const response = await axiosClient.post('/login', {
        email: data.email,
        password: data.senha,
      })
      if (response) {
        alert('Login efetuado com sucesso!')
      }
    } catch (err) {
      const error = err as AxiosError
      const responseData = error.response?.data as ErrorResponse
      const userMessage = responseData.errors[0]?.userMessage
      alert(userMessage)
    }
  }
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
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.inputField}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Senha</Text>
              </View>
              <Controller
                control={control}
                name="senha"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    style={styles.inputField}
                    secureTextEntry={!showPassword}
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />
              <Pressable onPress={handleShowPassword} style={styles.iconForm}>
                {!showPassword ? <CloseEye /> : <OpenEye />}
              </Pressable>
            </View>
          </View>
          <Pressable onPress={() => router.push('/forgot-password/')}>
            <Text style={styles.linkForgetPassword}>Esqueceu sua senha?</Text>
          </Pressable>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={globalStyles.primaryButton}
            onPress={handleSubmit(handleLogin)}
          >
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
