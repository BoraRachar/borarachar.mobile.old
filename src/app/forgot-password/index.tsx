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
import { useForm, Controller } from 'react-hook-form'

import BackFrame from '@/src/assets/images/backFrame.svg'
import ForgotPasswordAmico from '@/src/assets/images/forgot-password-amico.svg'

import { styles } from './styles'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function ForgotPassword() {
  const router = useRouter()
  const { control, handleSubmit } = useForm({})
  const handleBackButton = () => {
    router.back()
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
                <View style={styles.inputContainer}>
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
          </View>
        </ScrollView>

        <View style={{ gap: 8, marginBottom: 20 }}>
          <TouchableOpacity style={styles.sendRecoveryCodeButton}>
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
