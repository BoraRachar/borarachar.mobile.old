import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  codeInputContent: {
    flex: 1,
    marginTop: 24,
  },
  subTitle: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.bold,
    fontWeight: 'bold',
    fontSize: 24,
  },
  optContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  otpInput: {
    borderRadius: 6,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    width: 48,
    height: 48,
    textAlign: 'center',
  },
  separator: {
    width: 20,
    height: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 6,
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
  receivedCodeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  receivedCodeText: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  receivedCodeLink: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.bold,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
})
