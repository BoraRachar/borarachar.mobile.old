import Header from '@/src/components/HeaderComponent/HeaderComponent'
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
import { useForm, Controller, useWatch, FieldValue } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import BackFrame from '@/src/assets/images/backFrame.svg'
import ForgotPasswordAmico from '@/src/assets/images/forgot-password-amico.svg'
import WarningCircle from '../../assets/images/WarningCircle.svg'
import SucessCircle from '../../assets/images/sucessCircle.svg'

import { styles } from './styles'
import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'

const regexValidEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const schema = yup.object().shape({
  email: yup
    .string()
    .email('O campo deve ser um e-mail')
    .required('O campo deve ser preenchido'),
})

export default function ForgotPassword() {
  const [emailIsVlid, setEmailIsValid] = useState(false)
  const [isActiveButton, setIsActiveButton] = useState(false)

  const router = useRouter()
  const { control, handleSubmit } = useForm({ resolver: yupResolver(schema) })

  const email = useWatch({ control, name: 'email', defaultValue: 'default' })

  const verifyEmailIsValid = (email: string) => {
    const validEmail = regexValidEmail.test(String(email).toLowerCase())
    if (validEmail) {
      setEmailIsValid(true)
      setIsActiveButton(true)
      return
    }
    setEmailIsValid(false)
    setIsActiveButton(false)
  }

  useEffect(() => {
    verifyEmailIsValid(email)
  }, [email])

  const handleBackButton = () => {
    router.back()
  }

  const onSubmit = (data: FieldValue) => {
    console.log(data)
    router.push('/reset-password/')
  }

  return (
    <View style={styles.container}>
      <Header
        title="Redefinir Senha"
        leftIcon={{ icon: <BackFrame />, onPress: handleBackButton }}
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ paddingHorizontal: 24, flex: 1 }}
        keyboardVerticalOffset={-20}
      >
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <ForgotPasswordAmico
            style={{ alignSelf: 'center' }}
            width={256}
            height={256}
          />

          <View>
            <Text style={styles.subtitle}>Esqueceu sua senha?</Text>
            <Text style={styles.description}>
              Não se preocupe! Digite seu e-mail e enviaremos um código de
              recuperação para você criar uma nova senha.
            </Text>
          </View>

          <View>
            <Text style={styles.label}>E-mail</Text>
            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <View
                  style={
                    emailIsVlid
                      ? styles.inputContainer
                      : styles.inputContainerError
                  }
                >
                  <TextInput
                    style={styles.input}
                    placeholder="joão@mail.com"
                    keyboardType="email-address"
                    value={value}
                    onChangeText={onChange}
                  />
                  {emailIsVlid ? <SucessCircle /> : <WarningCircle />}
                </View>
              )}
            />
            {!emailIsVlid && (
              <Text style={styles.errorMessage}>Insira um email valido</Text>
            )}
          </View>
        </ScrollView>

        <View style={{ gap: 8, marginBottom: 20 }}>
          <TouchableOpacity
            style={
              isActiveButton
                ? styles.sendRecoveryCodeButton
                : styles.disabledsendRecoveryCodeButton
            }
            onPress={handleSubmit(onSubmit)}
            disabled={!isActiveButton}
          >
            <Text
              style={
                isActiveButton
                  ? styles.sendRecoveryCodeTextButton
                  : styles.disableSendRecoveryCodeTextButton
              }
            >
              Enviar código de recuperação
            </Text>
          </TouchableOpacity>

          <Pressable>
            <Text style={styles.textLinkLogin}>Lembrou sua senha?</Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </View>
  )
}
