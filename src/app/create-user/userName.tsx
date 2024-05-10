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
import { useForm, Controller, FieldValues } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'
import WarningCircle from '../../assets/images/WarningCircle.svg'

const schema = yup
  .object({
    apelido: yup
      .string()
      .test((value) => value?.startsWith('@') || value === '')
      .required('O campo deve ser preenchido'),
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

  const onSubmit = (data: FieldValues) => {
    const username = data.apelido ? `@${data.apelido.trim()}` : ''
    addUser({ apelido: username })
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
            Agora escolha um nome de usuário
          </Text>
          <Controller
            control={control}
            name="apelido"
            defaultValue=""
            render={({ field: { onChange, value } }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TextInput
                  style={errors.apelido ? styles.inputError : styles.input}
                  placeholder="@"
                  placeholderTextColor={theme.colors.secondary}
                  value={value}
                  onChangeText={(text) => {
                    const formattedText = text.trim().startsWith('@')
                      ? text.trim()
                      : `@${text.trim()}`
                    onChange(formattedText)
                  }}
                />
                {errors.apelido && <WarningCircle style={styles.iconForm} />}
              </View>
            )}
          />
          {errors.apelido && (
            <Text style={styles.errorText}>{errors.apelido.message}</Text>
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
