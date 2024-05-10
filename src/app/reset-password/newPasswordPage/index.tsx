import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'

import { styles } from './styles'
import { useState, useRef } from 'react'

type FormData = {
  newPassword: 'string'
  newPasswordConfirm: 'string'
}

const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required('O campo de senha não pode ser vázio')
    .matches(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .matches(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
    .matches(
      /[!@#$%&-]/,
      'Deve conter pelo menos um dos caracteres: !, @, #, $, %, &, -',
    )
    .min(6, 'A senha deve conter pelo menos 6 dígitos'),
  newPasswordConfirm: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'A senhas não conferem'),
})

export default function NewPasswordPage() {
  const [hidden, setHidden] = useState(true)
  const [hidden2, setHidden2] = useState(true)
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const scrollViewRef = useRef()

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data)
  }

  const handleFocus = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true })
  }

  return (
    <>
      {/* main */}
      <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.subTitle}>É fácil redefinir sua senha.</Text>
          <Text style={styles.description}>
            Atualize sua senha para manter sua conta segura!
          </Text>
        </View>

        <View style={{ flex: 1, marginTop: 24 }}>
          <View>
            {/* InputText 1 */}
            <View>
              <Text style={styles.label}>Nova senha</Text>
              <View style={styles.inputTextWrapper}>
                <TextInput
                  style={styles.inputText}
                  autoFocus={false}
                  secureTextEntry={hidden}
                  maxLength={20}
                  {...register('newPassword')}
                  onChangeText={(text) => setValue('newPassword', text)}
                  onFocus={() => handleFocus()}
                />
                <Pressable onPress={() => setHidden(!hidden)}>
                  <Ionicons
                    name={hidden === true ? 'eye-outline' : 'eye-off-outline'}
                    color={theme.colors.primary}
                    size={25}
                  />
                </Pressable>
              </View>
              {errors && (
                <Text style={styles.errorMessage}>
                  {errors.newPassword?.message}
                </Text>
              )}
            </View>

            {/* InputText2 */}
            <View>
              <Text style={styles.label}>Confirmar nova senha</Text>
              <View style={styles.inputTextWrapper}>
                <TextInput
                  style={styles.inputText}
                  secureTextEntry={hidden2}
                  maxLength={20}
                  {...register('newPasswordConfirm')}
                  onChangeText={(text) => setValue('newPasswordConfirm', text)}
                  onFocus={() => handleFocus()}
                />
                <Pressable onPress={() => setHidden2(!hidden2)}>
                  <Ionicons
                    name={hidden2 === true ? 'eye-outline' : 'eye-off-outline'}
                    color={theme.colors.primary}
                    size={25}
                  />
                </Pressable>
              </View>
              {errors && (
                <Text style={styles.errorMessage}>
                  {errors.newPasswordConfirm?.message}
                </Text>
              )}
            </View>

            <View>
              <Text style={styles.descriptionPassword}>
                Deve conter no mínimo 8 caracteres sendo:
              </Text>
              <Text
                style={[styles.descriptionPassword, { marginLeft: 6 }]}
              >{`\u2022 1 maiúsculo`}</Text>
              <Text
                style={[styles.descriptionPassword, { marginLeft: 6 }]}
              >{`\u2022 1 minúsculo`}</Text>
              <Text style={[styles.descriptionPassword, { marginLeft: 6 }]}>
                {`\u2022 1 especial (!, @, #, $, %, &, *, - ...)`}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* footer */}
      <View style={{ paddingBottom: 24 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Criar nova senha</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
    </>
  )
}
