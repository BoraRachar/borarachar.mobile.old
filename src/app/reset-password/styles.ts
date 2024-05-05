import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  title: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
  },
})
