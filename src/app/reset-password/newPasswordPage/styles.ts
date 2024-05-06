import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  subTitle: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.bold,
    fontSize: 32,
  },
  description: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
    fontSize: 16,
  },
  label: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  inputTextWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    marginTop: 4,
  },
  inputText: {
    width: '90%',
    color: theme.colors.primary,
    fontSize: 18,
  },
  errorMessage: {
    color: 'red',
  },
  descriptionPassword: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
  },
})
