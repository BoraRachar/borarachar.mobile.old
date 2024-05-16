import { View, Text, TouchableOpacity } from 'react-native'
import { useEffect } from 'react'
import { Link, router } from 'expo-router'
import CheckBox from 'expo-checkbox'
import { theme } from '@/src/theme'
import { styles } from './styles'
import useStore from '@/src/store/CreateUserStore'
import { useStepStore } from '@/src/store/StepStore'
import { axiosClient } from '@/src/utils/axios'
import { AxiosError } from 'axios'

interface ErrorResponse {
  statusCode: number
  errors: { userMessage: string }[]
}

export default function TermsAndPrivacyPolicy() {
  const { user } = useStore()
  const { increaseStep } = useStepStore()

  const isButtonDisable = user.termosUso && user.politicasPrivacidade

  const handleTermAndPolicy = () => {
    if (user.termosUso) increaseStep()
    if (user.politicasPrivacidade) increaseStep()
  }

  useEffect(() => {
    handleTermAndPolicy()
  }, [user.termosUso, user.politicasPrivacidade])

  const handleCreateUser = async () => {
    try {
      await axiosClient.post('/user', user)
      console.log('Usuário cadastrado com sucesso')
      router.push('/success-screen/')
    } catch (err) {
      const error = err as AxiosError
      const responseData = error.response?.data as ErrorResponse
      const userMessage = responseData.errors[0]?.userMessage
      console.log(userMessage)
    }
  }
  return (
    <View style={styles.contentForm}>
      <View>
        <Text style={styles.titleInput}>Termos e política de privacidade</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkboxInput}
            value={user.termosUso}
            disabled={!user.termosUso}
            color={user.termosUso ? theme.colors.primary : undefined}
          />
          <Text style={styles.checkboxText}>
            Eu li e concordo com os{' '}
            <Link push href="/term-service/" style={styles.checkboxLink}>
              Termos de Serviço
            </Link>
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkboxInput}
            value={user.politicasPrivacidade}
            disabled={!user.politicasPrivacidade}
            color={user.politicasPrivacidade ? theme.colors.primary : undefined}
          />
          <Text style={styles.checkboxText}>
            Eu li e concordo com a{' '}
            <Link push href="/privacy-policy/" style={styles.checkboxLink}>
              Política de Privacidade
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          disabled={!isButtonDisable}
          onPress={handleCreateUser}
        >
          <View style={styles.userButton}>
            <Text style={styles.emailButtonText}>Criar conta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
