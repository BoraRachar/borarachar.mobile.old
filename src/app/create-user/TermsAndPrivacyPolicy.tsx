import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import CheckBox from 'expo-checkbox'
import { theme } from '@/src/theme'
import { styles } from './styles'
import useStore from '@/src/store/CreateUserStore'
export default function TermsAndPrivacyPolicy() {
  const [isCheckedPolicy, setIsCheckedPolicy] = useState(false)
  const { user } = useStore()

  const isButtonDisable = user.termoUso && user.politicasPrivacidade

  return (
    <View style={styles.contentForm}>
      <View>
        <Text style={styles.titleInput}>Termos e política de privacidade</Text>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkboxInput}
            value={user.termoUso}
            disabled={!user.termoUso}
            color={user.termoUso ? theme.colors.primary : undefined}
          />
          <Text style={styles.checkboxText}>
            Eu li e concordo com os{' '}
            <Link push href="/term-service/" style={styles.checkboxLink}>
              Termos de Serviço
            </Link>
          </Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            style={styles.checkboxInput}
            value={isCheckedPolicy}
            onValueChange={setIsCheckedPolicy}
            disabled={!user.politicasPrivacidade}
            color={isCheckedPolicy ? theme.colors.primary : undefined}
          />
          <Text style={styles.checkboxText}>
            Eu li e concordo com a{' '}
            <Link push href="/" style={styles.checkboxLink}>
              Política de Privacidade
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity disabled={isButtonDisable}>
          <View style={styles.userButton}>
            <Text style={styles.emailButtonText}>Criar conta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
