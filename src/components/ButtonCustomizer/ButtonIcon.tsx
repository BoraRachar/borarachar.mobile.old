import { ElementType } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

interface ButtonIconProps {
  icon: ElementType
  customStyles?: StyleProp<ViewStyle>
}

export function ButtonIcon({ icon: Icon, customStyles }: ButtonIconProps) {
  return <Icon style={customStyles} />
}
