import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'

import { styles } from './styles'
import { useState } from 'react'
import { useRouter } from 'expo-router'

export default function NewPasswordPage() {
  const router = useRouter()
  const [hidden, setHidden] = useState(true)
  const [hidden2, setHidden2] = useState(true)

  return (
    <>
      {/* main */}
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitle}>É fácil redefinir sua senha.</Text>
        <Text style={styles.description}>
          Atualize sua senha para manter sua conta segura!
        </Text>

        <View style={{ marginTop: 24, gap: 16 }}>
          <View>
            <Text style={styles.label}>Nova senha</Text>
            <View style={styles.inputTextWrapper}>
              <TextInput
                style={styles.inputText}
                autoFocus={true}
                secureTextEntry={hidden}
                maxLength={20}
              />
              <Pressable onPress={() => setHidden(!hidden)}>
                <Ionicons
                  name={hidden === true ? 'eye-outline' : 'eye-off-outline'}
                  color={theme.colors.primary}
                  size={25}
                />
              </Pressable>
            </View>
          </View>

          <View>
            <Text style={styles.label}>Confirmar nova senha</Text>
            <View style={styles.inputTextWrapper}>
              <TextInput
                style={styles.inputText}
                autoFocus={true}
                secureTextEntry={hidden2}
                maxLength={20}
              />
              <Pressable onPress={() => setHidden2(!hidden2)}>
                <Ionicons
                  name={hidden2 === true ? 'eye-outline' : 'eye-off-outline'}
                  color={theme.colors.primary}
                  size={25}
                />
              </Pressable>
            </View>
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

      {/* footer */}
      <View style={{ paddingBottom: 24 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/reset-password/sucess')}
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
