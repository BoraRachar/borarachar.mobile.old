import { useState } from 'react'
import { View } from 'react-native'

import Header from '@/src/components/HeaderComponent/HeaderComponent'
import ProgressBarComponent from '@/src/components/ProgressBarComponent'
import CodeInput from './codeInput/codeInput'
import NewPassword from './newPassword/newPassword'

import { styles } from './styles'

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

      {step === 1 ? <CodeInput increaseStep={increaseStep} /> : <NewPassword />}
    </View>
  )
}
