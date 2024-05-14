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
import useStore from '@/src/store/CreateUserStore'
import { useForm, Controller, FieldValues, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import useKeyboardStatus from '@/src/utils/keyboardUtils'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'
import OpenEye from '../../assets/images/openEye.svg'
import CloseEye from '../../assets/images/closeEye.svg'
import WarningCircle from '../../assets/images/WarningCircle.svg'
import PasswordInfoComponent from '@/src/components/PasswordInfoComponent'

const schema = yup
  .object({
    password: yup
      .string()
      .required('O campo deve ser preenchido')
      .min(8, 'A senha deve ter pelo menos 8 caracteres'),
  })
  .required()

export default function PasswordInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { handleNavigationButton } = useNavigationControls()
  const password = useWatch({ control, name: 'password', defaultValue: '' })
  const { addUser } = useStore()
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

  const onSubmit = (data: FieldValues) => {
    addUser({ password: data.password })
    handleNavigationButton()
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
        <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles.titleInput}>
              Crie uma senha para a sua conta
            </Text>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, value } }) => (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TextInput
                    style={errors.password ? styles.inputError : styles.input}
                    secureTextEntry={!showPassword}
                    placeholderTextColor={theme.colors.secondary}
                    cursorColor={theme.colors.tertiary}
                    value={value}
                    onChangeText={onChange}
                  />
                  {!errors.password ? (
                    <Pressable
                      onPress={handleShowPassword}
                      style={styles.iconForm}
                    >
                      {!showPassword ? <CloseEye /> : <OpenEye />}
                    </Pressable>
                  ) : (
                    <WarningCircle style={styles.iconForm} />
                  )}
                </View>
              )}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
            <PasswordInfoComponent password={password} />
          </View>
        </ScrollView>
        <View style={[styles.buttonsContainer, { marginTop: 20 }]}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
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
