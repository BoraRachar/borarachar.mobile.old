import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    marginTop: 24,
    marginBottom: 8,
    fontFamily: theme.fontFamily.bold,
    fontSize: 24,
    color: theme.colors.primary,
    lineHeight: 30,
    letterSpacing: -0.2,
  },
  description: {
    fontFamily: theme.fontFamily.regular,
    color: theme.colors.primary,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: theme.fontFamily.medium,
    color: theme.colors.gray600,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    width: '95%',
  },
  sendRecoveryCodeButton: {
    backgroundColor: theme.colors.gray600,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    padding: 12,
  },
  sendRecoveryCodeTextButton: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 16,
  },
  textLinkLogin: {
    textAlign: 'center',
    color: theme.colors.gray600,
    fontFamily: theme.fontFamily.semiBold,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  errorMessage: {
    color: theme.colors.Error500,
  },
})
