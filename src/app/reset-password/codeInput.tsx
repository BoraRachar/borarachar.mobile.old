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

type CodeInputProps = {
  increaseStep: () => void
}

export default function CodeInput({ increaseStep }: CodeInputProps) {
  const [otp, setOTP] = useState<string[]>([])
  const inputRefs = useRef<TextInput[]>([])

  const getOTPvalue = (text: string, index: number) => {
    const newOTP = [...otp]
    newOTP[index] = text
    setOTP(newOTP)
  }

  const handleOTPChangeText = (text: string, index: number) => {
    if (text.length === 0 && index > 0) {
      if (index === 4) {
        inputRefs.current[index - 2].focus()
        getOTPvalue(text, index)
        return
      }
      inputRefs.current[index - 1].focus()
    } else if (text.length === 1 && index < 6) {
      if (index === 2) {
        inputRefs.current[index + 2].focus()
        getOTPvalue(text, index)
        return
      }
      inputRefs.current[index + 1].focus()
    }
    getOTPvalue(text, index)
  }

  const handleBackspace = (index: number) => {
    if (index > 0) {
      if (index === 4) {
        inputRefs.current[index - 2].focus()
        return
      }
      inputRefs.current[index - 1].focus()
    }
  }

  // console.log(otp)
  // console.log(otp.join(''))

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={styles.codeInputContent}>
        <Text style={styles.subTitle}>
          Insira o código enviado ao seu e-mail
        </Text>

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

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => increaseStep()}>
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
