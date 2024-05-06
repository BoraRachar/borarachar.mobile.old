import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
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
  button: {
    color: theme.colors.primary,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 50,
    fontWeight: 'bold',
    padding: 10,
  },
})
