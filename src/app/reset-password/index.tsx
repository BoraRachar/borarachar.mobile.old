import { View } from 'react-native'

import ProgressBarComponent from '@/src/components/ProgressBarComponent'
import Header from '@/src/components/HeaderComponent/HeaderComponent'
import CodeInput from './codeInput'
import NewPasswordPage from './newPasswordPage'

import { styles } from './styles'
import { useState } from 'react'

export default function ResetPassword() {
  const [step, setStep] = useState<number>(1)

  const totalSteps = 3

  const increaseStep = () => {
    setStep(step + 1)
  }

  return (
    <View style={styles.container}>
      <View>
        <Header title="Redefinir Senha" />
        <ProgressBarComponent totalSteps={totalSteps} currentStep={step} />
      </View>

      {step === 1 ? (
        <CodeInput increaseStep={increaseStep} />
      ) : (
        <NewPasswordPage />
      )}
    </View>
  )
}
