import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    width: '100%',
    height: 72,
  },
  headerText: {
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },
  iconContainer: {
    width: '38%',
  },
  textContainer: {
    width: '62%',
  },
  progressBar: {
    marginTop: 20,
  },
  formContainer: {
    width: '90%',
    height: '80%',
    marginLeft: '5%',
    marginTop: 30,
  },
  contentForm: {
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  titleInput: {
    color: theme.colors.primary,
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '700',
  },
  input: {
    width: '100%',
    height: 48,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    color: theme.colors.secondary,
  },
  cancelButton: {
    minWidth: '48%',
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.tertiary,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.primary,
    lineHeight: 22,
  },
  emailButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '48%',
    height: 48,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
  },
  emailButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.white,
    lineHeight: 22,
    textAlignVertical: 'center',
  },
  arrowIcon: {
    marginLeft: 8,
    marginTop: 3,
  },
  userButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '100%',
    height: 48,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
  },
  passwordInfoTitle: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '400',
    color: theme.colors.primary,
    marginTop: 15,
  },
  passwordInfoListItem: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: '400',
    color: theme.colors.primary,
    marginLeft: 10,
  },
  iconForm: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  checkboxContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
  checkboxInput: {
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 3,
  },
  checkboxText: {
    color: theme.colors.primary,
    marginLeft: 10,
  },
  checkboxLink: {
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    marginTop: 5,
  },
  inputError: {
    width: '100%',
    height: 48,
    borderColor: theme.colors.error,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 20,
    padding: 10,
    color: theme.colors.secondary,
  },
})
