import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '@/src/theme'

export default function Badge(password: string) {
  const [howManyTrue, setHowManyTrue] = useState(0)
  const countTruty = (array: Array<boolean>) => {
    let howManyTrue = 0

    for (const i in array) {
      if (array[i] === true) {
        howManyTrue++
      }
    }
    return howManyTrue
  }

  const handlePasswordChange = (password: string) => {
    const criteria: boolean[] = [
      /[A-Z]/.test(password),
      /[a-z]/.test(password),
      /[0-9]/.test(password),
      /[!@#$%^&*()_]/.test(password),
    ]

    const howManyTrue = countTruty(criteria)
    setHowManyTrue(howManyTrue)
  }

  useEffect(() => {
    handlePasswordChange(password)
  }, [password])

  if (howManyTrue === 0) return

  if (howManyTrue === 4) {
    return (
      <View style={[styles.badge, styles.badgeStrong]}>
        <Ionicons
          name="checkmark-circle-outline"
          size={18}
          color={theme.colors.Success500}
        />
        <Text style={[styles.badgeText, styles.badgeTextStrong]}>Forte</Text>
      </View>
    )
  }

  if (howManyTrue === 3) {
    return (
      <View style={[styles.badge, styles.badgeMedium]}>
        <Ionicons
          name="warning-outline"
          size={18}
          color={theme.colors.Warning500}
        />
        <Text style={[styles.badgeText, styles.badgeTextMedium]}>Média</Text>
      </View>
    )
  }

  return (
    <View style={[styles.badge, styles.badgeError]}>
      <Ionicons
        name="alert-circle-outline"
        size={18}
        color={theme.colors.Error500}
      />
      <Text style={[styles.badgeText, styles.badgeTextError]}>fraca</Text>
    </View>
  )
}
