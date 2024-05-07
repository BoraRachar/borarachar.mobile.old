import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'

export default function PasswordInput() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.contentForm}>
        <View>
          <Text style={styles.titleInput}>Crie uma senha para a sua conta</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={theme.colors.secondary}
          />
          <View>
            <Text style={styles.passwordInfoTitle}>
              Deve conter no mínimo 8 caracteres sendo:
            </Text>
            <Text
              style={styles.passwordInfoListItem}
            >{`\u2022 1 maiúsculo`}</Text>
            <Text
              style={styles.passwordInfoListItem}
            >{`\u2022 1 minúsculo`}</Text>
            <Text
              style={styles.passwordInfoListItem}
            >{`\u2022 1 especial (!, @, #, $, %, &, *, - ...)`}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity>
            <View style={styles.userButton}>
              <Text style={styles.emailButtonText}>Termos</Text>
              <ArrowRight style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
