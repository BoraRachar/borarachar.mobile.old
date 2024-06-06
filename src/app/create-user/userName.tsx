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
    usuario: yup.string().required('O campo deve ser preenchido'),
  })
  .required()

export default function UserName() {
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
    addUser({ usuario: data.usuario })
    handleNavigationButton()
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={contentFormStyle}>
        <View>
          <Text style={styles.titleInput}>
            Agora escolha um nome de usuário
          </Text>
          <Controller
            control={control}
            name="usuario"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={errors.usuario ? styles.inputError : styles.input}
                  placeholder="BoraRachar123"
                  placeholderTextColor={theme.colors.secondary}
                  value={value}
                  onChangeText={onChange}
                />
                {errors.usuario && <WarningCircle style={styles.iconForm} />}
              </View>
            )}
          />
          {errors.usuario && (
            <Text style={styles.errorText}>{errors.usuario.message}</Text>
          )}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <View style={styles.userButton}>
              <Text style={styles.emailButtonText}>Senha</Text>
              <ArrowRight style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
