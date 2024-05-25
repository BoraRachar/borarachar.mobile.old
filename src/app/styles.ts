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
  primaryButton: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.Gray[600],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: theme.colors.white,
  },
  secondaryButton: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.Gray[200],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  secondaryButtonText: {
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: theme.colors.Gray[700],
  },
  tertiaryButton: {
    width: '100%',
    height: 48,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.Gray[600],
    justifyContent: 'center',
    alignItems: 'center',
  },
  tertiaryButtonText: {
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: theme.colors.Gray[600],
  },
  textButton: {
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButtonText: {
    fontSize: theme.sizes.fontSize16,
    lineHeight: 24,
    color: theme.colors.Gray[600],
    textDecorationLine: 'underline',
    fontWeight: 'bold',
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
    backgroundColor: theme.colors.Gray[200],
  },
  horizontalText: {
    marginHorizontal: 10,
    color: theme.colors.Gray[600],
    fontSize: 16,
    fontWeight: 'bold',
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    color: theme.colors.Gray[600],
    marginTop: 24,
  },
  generalText: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.Gray[600],
  },
})
