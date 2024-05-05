import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  subTitle: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.bold,
    fontWeight: 'bold',
    fontSize: 24,
  },
  pinCodeContainer: {
    borderRadius: 6,
    borderColor: '#545f71',
    borderWidth: 2,
    width: 48,
    height: 48,
  },
  pinCodeText: {
    color: theme.colors.primary,
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
  receivedCode: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  bodySmall: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
  },
  linkSmall: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.bold,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
})
