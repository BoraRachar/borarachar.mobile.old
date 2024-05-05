import { Text, View } from 'react-native'
import { styles } from './styles'
import ProgressBarComponent from '@/src/components/ProgressBarComponent'
import CodeInputPage from './codeInputPage'

export default function ResetPassword() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.title}>Redefinir senha</Text>

        <ProgressBarComponent totalSteps={3} currentStep={1} />
      </View>

      {/* main */}
      <View style={{ flex: 1, marginTop: 24 }}>
        <CodeInputPage />
      </View>
    </View>
  )
}
