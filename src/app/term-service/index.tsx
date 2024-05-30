import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native'
import { router } from 'expo-router'
import Header from '@/src/components/HeaderComponent/HeaderComponent'
import { ButtonCustomizer } from '../../components/ButtonCustomizer'
import { styles } from './styles'
import { styles as globalStyles } from '../styles'
import { termAndService } from '@/src/data/termService'
import useStore from '@/src/store/CreateUserStore'

export default function TermService() {
  const { addUser } = useStore()

  const onSubmit = () => {
    addUser({ termosUso: true })
    router.back()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <Header title="Termo de Serviço" />
      <View style={styles.contentContainer}>
        <ScrollView
          style={styles.scrollContentForm}
          showsVerticalScrollIndicator={false}
        >
          <Text>{termAndService.termoDeServicoText}</Text>
        </ScrollView>
        <ButtonCustomizer.Root type={'primary'} onPress={onSubmit}>
          <ButtonCustomizer.Title
            title="Li e concordo com os Termos"
            customStyles={globalStyles.primaryButtonText}
          />
        </ButtonCustomizer.Root>
      </View>
    </KeyboardAvoidingView>
  )
}
