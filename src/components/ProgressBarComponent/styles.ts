import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
  progressBarBackground: {
    width: '90%',
    height: 2,
    backgroundColor: theme.colors.tertiary,
    borderRadius: 8,
  },
  progressBarTranck: {
    height: 2,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
  },
})
