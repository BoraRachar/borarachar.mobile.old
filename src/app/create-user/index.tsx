import { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import BackFrame from '../../assets/images/backFrame.svg'
import ProgressBarComponent from '@/src/components/ProgressBarComponent/ProgressBarComponent'
import TermsAndPrivacyPolicy from '@/src/app/create-user/TermsAndPrivacyPolicy'
import { styles } from './styles'

export default function CreateUser() {
  const [isVisible, setIsVisible] = useState(true)
  const [step, setStep] = useState(1)

  function handleBackButton() {
    setStep(step + 1)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {isVisible && (
            <Pressable onPress={() => handleBackButton()}>
              <BackFrame />
            </Pressable>
          )}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.headerText}>Criar conta</Text>
        </View>
      </View>
      <ProgressBarComponent totalSteps={5} currentStep={step} />
      <View style={styles.formContainer}>
        <TermsAndPrivacyPolicy />
      </View>
    </View>
  )
}
