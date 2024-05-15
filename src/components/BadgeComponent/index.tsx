import { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'
import { theme } from '@/src/theme'

type BadgeProps = {
  backgroundColor: string
  name: string
  color: string
  textColor: string
  content: string
}

function Badge({
  backgroundColor,
  name,
  color,
  textColor,
  content,
}: BadgeProps) {
  return (
    <View style={[styles.badge, { backgroundColor: `${backgroundColor}` }]}>
      <Ionicons name={name} size={18} color={color} />
      <Text style={[styles.badgeText, { color: `${textColor}` }]}>
        {content}
      </Text>
    </View>
  )
}

export default function BadgeComponent(password: string) {
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

  let badge

  switch (howManyTrue) {
    case 0:
      break
    case 3:
      badge = (
        <Badge
          backgroundColor={theme.colors.Warning50}
          name="warning-outline"
          color={theme.colors.Warning500}
          textColor={theme.colors.Warning700}
          content="Médio"
        />
      )
      break
    case 4:
      badge = (
        <Badge
          backgroundColor={theme.colors.Success50}
          name="checkmark-circle-outline"
          color={theme.colors.Success500}
          textColor={theme.colors.Success700}
          content="Forte"
        />
      )
      break
    default:
      badge = (
        <Badge
          backgroundColor={theme.colors.Error50}
          name="alert-circle-outline"
          color={theme.colors.Error500}
          textColor={theme.colors.Error700}
          content="fraco"
        />
      )
      break
  }

  return badge
}
