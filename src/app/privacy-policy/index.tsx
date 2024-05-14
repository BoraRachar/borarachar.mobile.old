import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { router } from 'expo-router'
import Header from '@/src/components/HeaderComponent/HeaderComponent'
import { styles } from './styles'
import { termAndService } from '@/src/data/termService'
import useStore from '@/src/store/CreateUserStore'

export default function PrivacyPolicy() {
  const { addUser } = useStore()

  const onSubmit = () => {
    addUser({ politicasPrivacidade: true })
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
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.buttonTerm}>
            <Text style={styles.buttonTermText}>
              Li e concordo com a Política
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}
