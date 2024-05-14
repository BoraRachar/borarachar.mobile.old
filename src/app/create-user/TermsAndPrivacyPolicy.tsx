import { View, Text, TouchableOpacity } from 'react-native'
import { Link } from 'expo-router'
import CheckBox from 'expo-checkbox'
import { theme } from '@/src/theme'
import { styles } from './styles'
import useStore from '@/src/store/CreateUserStore'
export default function TermsAndPrivacyPolicy() {
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
            value={user.politicasPrivacidade}
            disabled={!user.politicasPrivacidade}
            color={user.politicasPrivacidade ? theme.colors.primary : undefined}
          />
          <Text style={styles.checkboxText}>
            Eu li e concordo com a{' '}
            <Link push href="/privacy-policy/" style={styles.checkboxLink}>
              Política de Privacidade
            </Link>
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          disabled={!isButtonDisable}
          onPress={() => alert(JSON.stringify(user))}
        >
          <View style={styles.userButton}>
            <Text style={styles.emailButtonText}>Criar conta</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
