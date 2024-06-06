import { theme } from '@/src/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  content: {
    flex: 1,
  },
  subTitle: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.bold,
    fontWeight: 'bold',
    fontSize: 30,
  },
  description: {
    color: theme.colors.primary,
    fontFamily: theme.fontFamily.regular,
    fontWeight: 'regular',
    fontSize: 16,
    marginTop: 8,
  },
  inputContainer: {
    marginTop: 32,
    gap: 16,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    color: theme.colors.gray600,
    fontFamily: theme.fontFamily.medium,
    fontSize: 14,
  },
  input: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.gray300,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 6,
  },
  textInput: {
    width: '90%',
    fontFamily: theme.fontFamily.regular,
    fontSize: 24,
    color: theme.colors.gray900,
  },
  error: {
    fontFamily: theme.fontFamily.regular,
    fontSize: 14,
    color: theme.colors.error,
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
