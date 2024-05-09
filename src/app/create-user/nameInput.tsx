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
import { router } from 'expo-router'
import { styles } from './styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'

const schema = yup
  .object({
    nome: yup.string().required('O nome é obrigatório'),
  })
  .required()

export default function NameInput() {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const { handleNavigationButton } = useNavigationControls()
  const { addUser } = useStore()

  const onSubmit = (data: FieldValues) => {
    addUser({ nome: data.nome })
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
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="João"
                placeholderTextColor={theme.colors.secondary}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity onPress={() => router.push('/')}>
            <View style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            disabled={!isDirty}
          >
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
