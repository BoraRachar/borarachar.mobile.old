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

import { styles } from './styles'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'
import { useEffect, useState } from 'react'

const schema = yup.object().shape({
  email: yup
    .string()
    .email('O campo deve ser um e-mail')
    .required('O campo deve ser preenchido'),
})

export default function ForgotPassword() {
  const [isValidEmail, setIsValidEmail] = useState(false)

  const router = useRouter()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) })

  const handleBackButton = () => {
    router.back()
  }

  const email = useWatch({ control, name: 'email', defaultValue: '' })
  const EmailValid = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const validEmail = re.test(String(email).toLowerCase())
    setIsValidEmail(validEmail)
  }

  useEffect(() => {
    EmailValid(email)
  }, [email])

  const onSubmit = (data) => {
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
              render={({ field: { onChange, value } }) => (
                <View
                  style={[
                    styles.inputContainer,
                    isValidEmail
                      ? { borderColor: theme.colors.Error500 }
                      : { borderColor: theme.colors.Success500 },
                  ]}
                >
                  <TextInput
                    style={styles.input}
                    placeholder="joão@mail.com"
                    keyboardType="email-address"
                    value={value}
                    onChangeText={onChange}
                  />
                  <Ionicons name="alert-circle-outline" size={18} />
                </View>
              )}
            />
            {errors.email && (
              <Text style={styles.errorMessage}>{errors.email.message}</Text>
            )}
          </View>
        </ScrollView>

        <View style={{ gap: 8, marginBottom: 20 }}>
          <TouchableOpacity
            style={styles.sendRecoveryCodeButton}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.sendRecoveryCodeTextButton}>
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
