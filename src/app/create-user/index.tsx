import { useState, useEffect } from 'react'
import { useStepStore } from '@/src/store/StepStore'
import { View } from 'react-native'
import BackFrame from '../../assets/images/backFrame.svg'
import ProgressBarComponent from '@/src/components/ProgressBarComponent/ProgressBarComponent'
import NameInput from './nameInput'
import EmailInput from './emailInput'
import UserName from './userName'
import PasswordInput from './passwordInput'
import TermsAndPrivacyPolicy from './TermsAndPrivacyPolicy'
import Header from '@/src/components/HeaderComponent/HeaderComponent'
import { styles } from './styles'

export default function CreateUser() {
  const totalSteps = 8
  const [isVisible, setIsVisible] = useState(true)
  const { step, decreaseStep } = useStepStore()

  useEffect(() => {
    if (step > 1 && step <= totalSteps) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [step])

  function handleBackButton() {
    if (step > 1 && step <= totalSteps) {
      decreaseStep()
    }
  }

  let formStep

  switch (step) {
    case 1:
      formStep = <NameInput />
      break
    case 2:
      formStep = <EmailInput />
      break
    case 3:
      formStep = <UserName />
      break
    case 4:
      formStep = <PasswordInput />
      break
    case 5:
      formStep = <TermsAndPrivacyPolicy />
      break
    default:
      formStep = <TermsAndPrivacyPolicy />
  }

  const leftIcon = isVisible
    ? { icon: <BackFrame />, onPress: handleBackButton }
    : undefined

  return (
    <View style={styles.container}>
      <Header title="Criar conta" leftIcon={leftIcon} />
      <ProgressBarComponent totalSteps={totalSteps} currentStep={step} />
      <View style={styles.formContainer}>{formStep}</View>
    </View>
  )
}
