import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  successContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 16,
  },
  button: {
    width: '100%',
    padding: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonArea: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerText: {
    paddingTop: 12,
  },
  successTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 20,
  },
  successText: {
    color: theme.colors.primary,
    fontSize: 16,
  },
})
