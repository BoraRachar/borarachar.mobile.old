import { useState } from 'react'
import { Text, View } from 'react-native'

import ProgressBarComponent from '@/src/components/ProgressBarComponent'
import Header from '@/src/components/HeaderComponent/HeaderComponent'
import CodeInput from './codeInput'
import NewPasswordPage from './newPasswordPage'

import { styles } from './styles'

export default function ResetPassword() {
  const [step, setStep] = useState(1)
  return (
    <View style={styles.container}>
      {/* header */}
      <View>
        <Header title="Redefinir Senha" />
        <ProgressBarComponent totalSteps={3} currentStep={step} />
      </View>

      {/* main */}
      <View style={{ flex: 1, marginTop: 24 }}>
        {step === 1 ? <CodeInput /> : <NewPasswordPage />}
      </View>
    </View>
  )
}
