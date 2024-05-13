import { useState, useRef, useEffect } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import useKeyboardStatus from '@/src/utils/keyboardUtils'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'
import OpenEye from '../../assets/images/openEye.svg'
import CloseEye from '../../assets/images/closeEye.svg'
import PasswordInfoComponent from '@/src/components/PasswordInfoComponent'

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const { handleNavigationButton } = useNavigationControls()
  const isKeyboardActive = useKeyboardStatus()
  const scrollViewRef = useRef<ScrollView>(null)

  const contentFormStyle = isKeyboardActive
    ? styles.contentFormSpecificBottom
    : styles.contentForm

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleScrollToEnd = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true })
  }

  useEffect(() => {
    if (isKeyboardActive) {
      handleScrollToEnd()
    }
  }, [isKeyboardActive])
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={contentFormStyle}>
        <ScrollView ref={scrollViewRef}>
          <View>
            <Text style={styles.titleInput}>
              Crie uma senha para a sua conta
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                style={styles.input}
                secureTextEntry={!showPassword}
                placeholderTextColor={theme.colors.secondary}
                cursorColor={theme.colors.tertiary}
                value={password}
                onChangeText={setPassword}
              />
              <Pressable onPress={handleShowPassword} style={styles.iconForm}>
                {!showPassword ? <CloseEye /> : <OpenEye />}
              </Pressable>
            </View>
            <PasswordInfoComponent password={password} />
          </View>
        </ScrollView>
        <View style={[styles.buttonsContainer, { marginTop: 20 }]}>
          <TouchableOpacity onPress={handleNavigationButton}>
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
