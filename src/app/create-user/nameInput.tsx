import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useState } from 'react'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import useStore from '@/src/store/CreateUserStore'
import { router } from 'expo-router'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'

export default function NameInput() {
  const { handleNavigationButton } = useNavigationControls()
  const { addUser } = useStore()
  const [nome, setNome] = useState('')

  const handleNomeChance = (text: string) => {
    setNome(text)
  }

  const onSubmit = () => {
    addUser({ nome })
    handleNavigationButton()
  }
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
            value={nome}
            onChangeText={handleNomeChance}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => router.push('/')}>
            <View style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onSubmit}>
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
