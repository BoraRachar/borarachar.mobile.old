import { colors } from '@/src/theme/colors'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    height: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
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
    marginTop: 24,
    marginBottom: 8,
    fontWeight: 'bold',
    fontSize: 24,
    color: colors.primary,
    lineHeight: 30,
    letterSpacing: -0.2,
  },
  subtitle: {
    color: colors.primary,
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 24,
  },
  inputField: {
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
    marginTop: 4,
    position: 'relative',
    padding: 12,
  },
  label: {
    fontSize: 14,
    color: colors.primary,
  },
  inputContainer: {
    paddingBottom: 8,
  },
  LinkLoginContainer: {
    marginTop: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  textLinkLogin: {
    color: colors.primary,
    fontWeight: '500',
    textAlign: 'center',
  },
  linkLoginLineBottom: {
    borderBottomWidth: 1,
    width: 136,
    borderBottomColor: colors.primary,
  },
  sendRecoveryCodeButton: {
    backgroundColor: colors.primary,
    width: '100%',
    borderRadius: 6,
    alignItems: 'center',
    padding: 12,
  },
  sendRecoveryCodeTextButton: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 16,
  },
  createAccountButton: {
    color: colors.primary,
    fontWeight: '500',
    fontSize: 16,
    backgroundColor: colors.tertiary,
    width: '100%',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
    textAlign: 'center',
  },
})
