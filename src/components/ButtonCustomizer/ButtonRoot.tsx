import React from 'react'
import { TouchableOpacity, ViewStyle, View } from 'react-native'
import { styles } from '../../app/styles'

interface ButtonRootProps {
  type: 'primary' | 'secondary' | 'tertiary' | 'textButton'
  customStyles?: ViewStyle | ViewStyle[]
  onPress: () => void
  children: React.ReactNode
}

export function ButtonRoot({
  type,
  children,
  customStyles,
  onPress,
}: ButtonRootProps) {
  const handleClickButton = () => {
    onPress()
  }

  const buttonStyle =
    type === 'primary'
      ? styles.primaryButton
      : type === 'secondary'
        ? styles.secondaryButton
        : type === 'tertiary'
          ? styles.tertiaryButton
          : type === 'textButton'
            ? styles.textButton
            : {}

  return (
    <TouchableOpacity
      onPress={handleClickButton}
      style={[buttonStyle, customStyles]}
    >
      <View>{children}</View>
    </TouchableOpacity>
  )
}
