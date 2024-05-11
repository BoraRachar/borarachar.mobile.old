import {
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  Pressable,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'

export default function CodeInput() {
  const [otp, setOTP] = useState<string>('')
  const inputRefs = useRef<TextInput[]>([])

  const handleOTPChangeText = (text: string, index: number) => {
    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus()
    } else if (text.length === 1 && index < 6) {
      inputRefs.current[index + 1].focus()
    }

    const newOTP = [...otp]
    newOTP[index] = text
    setOTP(newOTP.join(''))
  }

  const handleBackspace = (index: number) => {
    if (index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }

  console.log(otp)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.codeInputContent}>
        <Text style={styles.subTitle}>
          Insira o código enviado ao seu e-mail
        </Text>

        <View>
          <View style={styles.optContainer}>
            {Array.from({ length: 7 }, (_, index) => {
              if (index === 3) {
                return <View key={index} style={styles.separator}></View>
              }
              return (
                <TextInput
                  key={index}
                  ref={(ref) => (inputRefs.current[index] = ref as TextInput)}
                  style={styles.otpInput}
                  maxLength={1}
                  keyboardType="numeric"
                  secureTextEntry={true}
                  onChangeText={(text) => handleOTPChangeText(text, index)}
                  onKeyPress={({
                    nativeEvent,
                  }: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
                    if (nativeEvent.key === 'Backspace') {
                      handleBackspace(index)
                    }
                  }}
                />
              )
            })}
          </View>
        </View>
      </View>

      <View style={{ paddingBottom: 24, gap: 8 }}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Nova Senha</Text>
          <Ionicons
            name="arrow-forward-outline"
            size={16}
            color={theme.colors.white}
          />
        </TouchableOpacity>

        <View style={styles.receivedCodeContainer}>
          <Text style={styles.receivedCodeText}>Não recebeu o código?</Text>
          <Pressable>
            <Text style={styles.receivedCodeLink}>Enviar novamente</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
