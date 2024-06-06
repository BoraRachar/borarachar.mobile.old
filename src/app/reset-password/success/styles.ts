import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
  },
  header: {
    paddingVertical: 25,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
    color: theme.colors.primary,
  },
  subtitle: {
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 32,
    color: theme.colors.primary,
  },
  description: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
    color: theme.colors.primary,
  },
})
