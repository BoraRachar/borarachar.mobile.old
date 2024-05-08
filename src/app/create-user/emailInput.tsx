import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'
export default function EmailInput() {
  const { handleNavigationButton } = useNavigationControls()

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.contentForm}>
        <View>
          <Text style={styles.titleInput}>Nos diga seu melhor e-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="joão@mail.com"
            placeholderTextColor={theme.colors.secondary}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleNavigationButton}>
            <View style={styles.userButton}>
              <Text style={styles.emailButtonText}>Usuário</Text>
              <ArrowRight style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
