import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import useStore from '@/src/store/CreateUserStore'
import useKeyboardStatus from '@/src/utils/keyboardUtils'
import { useForm, Controller, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'
import WarningCircle from '../../assets/images/WarningCircle.svg'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Insira um e-mail válido')
      .required('O campo deve ser preenchido'),
  })
  .required()

export default function EmailInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { handleNavigationButton } = useNavigationControls()
  const { addUser } = useStore()
  const isKeyboardActive = useKeyboardStatus()

  const contentFormStyle = isKeyboardActive
    ? styles.contentFormSpecificBottom
    : styles.contentForm

  const onSubmit = (data: FieldValues) => {
    addUser({ email: data.email })
    handleNavigationButton()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={contentFormStyle}>
        <View>
          <Text style={styles.titleInput}>Nos diga seu melhor e-mail</Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={errors.email ? styles.inputError : styles.input}
                  placeholder="joão@mail.com"
                  placeholderTextColor={theme.colors.secondary}
                  value={value}
                  onChangeText={onChange}
                />
                {errors.email && <WarningCircle style={styles.iconForm} />}
              </View>
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
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
