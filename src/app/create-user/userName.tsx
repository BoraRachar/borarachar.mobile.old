import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { useNavigationControls } from '@/src/utils/CreateUserButtonsNavigation'
import useStore from '@/src/store/CreateUserStore'
import useKeyboardStatus from '@/src/utils/keyboardUtils'
import { ButtonCustomizer } from '../../components/ButtonCustomizer'
import { useForm, Controller, FieldValues, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useEffect } from 'react'
import * as yup from 'yup'
import { styles } from './styles'
import { styles as globalStyles } from '../styles'
import { theme } from '@/src/theme'
import ArrowRight from '../../assets/images/arrowRight.svg'
import ArrowRightDisable from '../../assets/images/arrowRightDisable.svg'
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
  const [isButtonDisable, setIsButtonDisable] = useState(true)
  const isKeyboardVisible = useKeyboardStatus()

  const usuario = useWatch({ control, name: 'usuario', defaultValue: '' })

  const onSubmit = (data: FieldValues) => {
    addUser({ usuario: data.usuario })
    handleNavigationButton()
  }

  useEffect(() => {
    if (usuario.trim().length > 0) {
      setIsButtonDisable(false)
    } else {
      setIsButtonDisable(true)
    }
  }, [usuario])

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.contentForm}>
        <View>
          <Text style={globalStyles.createUserTitle}>
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
      </View>
      {!isKeyboardVisible && (
        <View style={styles.buttonsContainer}>
          <ButtonCustomizer.Root
            type={'primary'}
            onPress={handleSubmit(onSubmit)}
            disabled={isButtonDisable}
            customStyles={
              isButtonDisable
                ? globalStyles.primaryButtonDisabled
                : globalStyles.primaryButton
            }
          >
            <ButtonCustomizer.Title
              title="Usuário"
              customStyles={
                isButtonDisable
                  ? globalStyles.primaryButtonTextDisabled
                  : globalStyles.primaryButtonText
              }
            />
            <ButtonCustomizer.Icon
              icon={isButtonDisable ? ArrowRightDisable : ArrowRight}
              customStyles={
                isButtonDisable
                  ? globalStyles.primaryButtonIconDisabled
                  : globalStyles.primaryButtonIcon
              }
            />
          </ButtonCustomizer.Root>
        </View>
      )}
    </KeyboardAvoidingView>
  )
}
