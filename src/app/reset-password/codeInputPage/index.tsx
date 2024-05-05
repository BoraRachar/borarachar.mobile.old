import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { OtpInput } from 'react-native-otp-entry'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'

import { styles } from './styles'

export default function CodeInputPage() {
  return (
    <>
      {/* main */}
      <View style={{ flex: 1 }}>
        <Text style={styles.subTitle}>
          Insira o código enviado ao seu e-mail
        </Text>

        <View style={{ marginTop: 24 }}>
          <OtpInput
            numberOfDigits={6}
            focusColor={theme.colors.primary}
            secureTextEntry={true}
            onTextChange={(text) => console.log(text)}
            theme={{
              pinCodeTextStyle: styles.pinCodeText,
              pinCodeContainerStyle: styles.pinCodeContainer,
            }}
          />
        </View>
        <TextInput />
      </View>

      {/* footer */}
      <View style={{ flexShrink: 1, paddingBottom: 24, gap: 8 }}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Nova Senha</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.white}
          />
        </TouchableOpacity>

        <View style={styles.receivedCode}>
          <Text style={styles.bodySmall}>Não recebeu o código?</Text>
          <Pressable>
            <Text style={styles.linkSmall}>Enviar novamente</Text>
          </Pressable>
        </View>
      </View>
    </>
  )
}
