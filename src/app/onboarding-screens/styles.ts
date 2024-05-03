import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  onboardingContainer: {
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: 10,
  },
  Button: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  buttonArea: {
    width: '100%',
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  Title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.primary,
    marginTop: 20,
  },
  containerText: {
    paddingTop: 12,
  },
  Text: {
    color: theme.colors.primary,
    fontSize: 16,
  },
  linkContainer: {
    paddingTop: 10,
  },
  onboardingLink: {
    textAlign: 'center',
    fontSize: 16,
  },
})
