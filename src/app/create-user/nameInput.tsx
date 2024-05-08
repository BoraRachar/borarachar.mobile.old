import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import { router } from 'expo-router'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'

export default function NameInput() {
  const { handleNavigationButton } = useNavigationControls()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.contentForm}>
        <View>
          <Text style={styles.titleInput}>
            Como você gostaria de ser chamado?
          </Text>
          <TextInput
            style={styles.input}
            placeholder="João"
            placeholderTextColor={theme.colors.secondary}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => router.push('/')}>
            <View style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleNavigationButton}>
            <View style={styles.emailButton}>
              <Text style={styles.emailButtonText}>E-mail</Text>
              <ArrowRight style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
