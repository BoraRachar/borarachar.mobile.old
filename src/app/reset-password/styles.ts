import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {},
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
    paddingVertical: 25,
    textAlign: 'center',
  },
})
