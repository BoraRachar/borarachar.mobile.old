import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  containerButtons: {
    paddingTop: 100,
    width: '90%',
    alignItems: 'center',
  },
  createAccountButton: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    padding: 12,
    borderRadius: 8,
    textAlign: 'center',
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: '500',
  },
  horizontalLineWithTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.tertiary,
  },
  horizontalText: {
    marginHorizontal: 10,
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    backgroundColor: theme.colors.tertiary,
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    textAlign: 'center',
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  calculatorButton: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    textAlign: 'center',
    color: theme.colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
})
