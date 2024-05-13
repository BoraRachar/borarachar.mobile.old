import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { router } from 'expo-router'

import CloseEye from '@/src/assets/images/closeEye.svg'
import OpenEye from '@/src/assets/images/openEye.svg'

import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '@/src/theme'

export default function NewPassword() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.subTitle}>Redefina sua senha</Text>
        <Text style={styles.description}>
          Siga as instruções abaixo para criar uma senha segura para a sua
          conta.
        </Text>

        <View style={styles.inputContainer}>
          <View>
            <View style={styles.labelContainer}>
              <Text style={styles.label}>Nova Senha</Text>
              <View style={styles.badge}>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={18}
                  color={theme.colors.Success500}
                />
                <Text style={styles.badgeText}>Forte</Text>
              </View>
            </View>

            <View style={styles.input}>
              <TextInput style={styles.textInput} secureTextEntry={true} />
              <OpenEye />
            </View>
          </View>

          <View>
            <Text style={styles.label}>Confirmar nova senha</Text>

            <View style={styles.input}>
              <TextInput style={styles.textInput} secureTextEntry={true} />
              <OpenEye />
            </View>
          </View>
        </View>

        <View style={{ gap: 8, marginTop: 16 }}>
          <Text style={styles.descriptionPassword}>
            Deve conter no mínimo 8 caracteres e 3 dos itens a seguir:
          </Text>
          <Text style={styles.descriptionPassword}>1 maiúsculo</Text>
          <Text style={styles.descriptionPassword}>1 minúsculo</Text>
          <Text style={styles.descriptionPassword}>
            1 numeral (1, 2, 3, 4...)
          </Text>
          <Text style={styles.descriptionPassword}>
            1 especial (!, @, #, $, %, &, *, - ...)
          </Text>
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[styles.button, { flexShrink: 1, marginBottom: 24 }]}
        onPress={() => router.push('/reset-password/sucess')}
      >
        <Text style={styles.buttonText}>Criar nova senha</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}
