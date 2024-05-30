import { View, Text } from 'react-native'
import { useEffect } from 'react'
import { Link, router } from 'expo-router'
import CheckBox from 'expo-checkbox'
import { theme } from '@/src/theme'
import { styles } from './styles'
import { styles as globalStyles } from '../styles'
import useStore from '@/src/store/CreateUserStore'
import { ButtonCustomizer } from '../../components/ButtonCustomizer'
import { useStepStore } from '@/src/store/StepStore'
import { axiosClient } from '@/src/utils/axios'
import { AxiosError } from 'axios'
import { ErrorResponse } from '@/src/interfaces/types'

export default function TermsAndPrivacyPolicy() {
  const { user } = useStore()
  const { increaseStep } = useStepStore()

  const isButtonDisable = !user.termosUso && !user.politicasPrivacidade

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
      router.push('/success-screen/')
    } catch (err) {
      const error = err as AxiosError
      const status = error.response?.status
      const responseData = error.response?.data as ErrorResponse
      const userMessage = responseData.errors[0]?.userMessage
      console.log(`status: ${status}, userMessage: ${userMessage}`)
    }
  }

  return (
    <View style={styles.contentForm}>
      <View>
        <Text style={globalStyles.createUserTitle}>
          Termos e política de privacidade
        </Text>
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
        <ButtonCustomizer.Root
          type={'primary'}
          onPress={handleCreateUser}
          disabled={isButtonDisable}
          customStyles={
            isButtonDisable
              ? globalStyles.primaryButtonDisabled
              : globalStyles.primaryButton
          }
        >
          <ButtonCustomizer.Title
            title="Criar conta"
            customStyles={
              isButtonDisable
                ? globalStyles.primaryButtonTextDisabled
                : globalStyles.primaryButtonText
            }
          />
        </ButtonCustomizer.Root>
      </View>
    </View>
  )
}
