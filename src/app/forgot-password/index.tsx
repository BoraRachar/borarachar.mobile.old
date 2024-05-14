import Ionicons from '@expo/vector-icons/build/Ionicons'
import { useRouter } from 'expo-router'
import { View, Text, TextInput, Pressable } from 'react-native'
import { styles } from './styles'
import { colors } from '@/src/theme/colors'

import ForgotPasswordAmico from '../../assets/images/forgot-password-amico.svg'

export default function ForgotPassword() {
  const router = useRouter()

  function handleBackToLogin() {
    router.back()
  }

  function handleSendRecoveryCode() {}

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.header}>
          <Pressable
            style={styles.headerBackButton}
            onPress={handleBackToLogin}
          >
            <Ionicons name="arrow-back" size={20} color={colors.primary} />
          </Pressable>
          <Text style={styles.headerTitle}>Esqueci minha senha</Text>
        </View>

        <ForgotPasswordAmico
          style={{ alignSelf: 'center' }}
          width={256}
          height={256}
        />

        <Text style={styles.title}>Esqueceu sua senha?</Text>
        <Text style={styles.subtitle}>
          Não se preocupe! Digite seu e-mail e enviaremos um código de
          recuperação para você criar uma nova senha.
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.inputField}
            selectionColor={colors.primary}
            placeholder="joão@email.com"
          />
        </View>
      </View>

      <View>
        <Pressable
          onPress={handleSendRecoveryCode}
          style={styles.sendRecoveryCodeButton}
        >
          <Text style={styles.sendRecoveryCodeTextButton}>
            Enviar código de recuperação
          </Text>
        </Pressable>

        <View style={styles.LinkLoginContainer}>
          <Text style={styles.textLinkLogin} onPress={handleBackToLogin}>
            Lembrei minha senha
          </Text>
          <View style={styles.linkLoginLineBottom} />
        </View>
      </View>
    </View>
  )
}
