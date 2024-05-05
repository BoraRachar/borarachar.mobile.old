import { useState } from 'react'
import { Text, View } from 'react-native'

import ProgressBarComponent from '@/src/components/ProgressBarComponent'
import CodeInputPage from './codeInputPage'
import NewPasswordPage from './newPasswordPage'

import { styles } from './styles'

export default function ResetPassword() {
  const [step, setStep] = useState(1)
  return (
    <View style={{ flex: 1, paddingHorizontal: 24 }}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.title}>Redefinir senha</Text>

        <ProgressBarComponent totalSteps={3} currentStep={step} />
      </View>

      {/* main */}
      <View style={{ flex: 1, marginTop: 24 }}>
        {step === 1 ? <CodeInputPage setStep={setStep} /> : <NewPasswordPage />}
      </View>
    </View>
  )
}
