import { colors } from '@/src/theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    width: '90%',
    height: '85%',
    marginLeft: '5%',
    justifyContent: 'space-between',
  },
  titleContainer: {
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 38,
    color: colors.textGray,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: colors.textGray,
  },
  inputsGroup: {
    gap: 16,
    marginTop: 35,
  },
  inputContainer: {
    paddingBottom: 8,
    gap: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: colors.textGray,
  },
  inputField: {
    borderWidth: 1,
    borderColor: colors.gray300,
    height: 48,
    borderRadius: 8,
    padding: 10,
    color: colors.gray600,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  iconForm: {
    position: 'absolute',
    right: 15,
    top: '70%',
    transform: [{ translateY: -12 }],
  },
  linkForgetPassword: {
    color: colors.textGray,
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    alignSelf: 'flex-end',
    textDecorationLine: 'underline',
  },
  loginButton: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.gray600,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    gap: 20,
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 22,
  },
  createAccountText: {
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    color: colors.gray600,
  },
  createAccountButton: {
    color: colors.gray700,
    fontWeight: '500',
  },
  errorText: {
    color: colors.error,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    marginTop: 5,
  },
})
