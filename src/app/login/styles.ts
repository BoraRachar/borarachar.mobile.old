import { StyleSheet } from 'react-native'
import { colors } from '../../theme/colors'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    height: '100%',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 40,
  },
  headerTitle: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    left: -40,
  },
  headerBackButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: colors.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: colors.primary,
    lineHeight: 36,
    letterSpacing: -0.2,
  },
  subtitle: {
    paddingTop: 8,
    paddingBottom: 24,
    color: colors.primary,
    fontSize: 16,
  },
  inputField: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
    marginTop: 4,
    position: 'relative',
    padding: 12,
  },
  eyeIcon: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 19,
    right: 12,
  },
  label: {
    fontSize: 14,
    color: colors.primary,
  },
  inputContainer: {
    paddingBottom: 8,
  },
  inputsGroup: {
    gap: 16,
  },
  linkForgetPassword: {
    color: colors.primary,
    fontWeight: '500',
  },
  linkForgetPasswordLineBottom: {
    borderBottomWidth: 1,
    width: 133,
    borderBottomColor: colors.primary,
  },
  buttonsContainer: {
    gap: 16,
    paddingTop: 48,
    marginBottom: 42,
    width: '100%',
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    padding: 12,
  },
  loginTextButton: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
  createAccountButton: {
    backgroundColor: colors.tertiary,
    width: '100%',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    alignItems: 'center',
  },
  createAccountTextButton: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: 16,
  },
})
