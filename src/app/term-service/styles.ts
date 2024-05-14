import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    width: '90%',
    height: '85%',
    marginLeft: '5%',
    gap: 16,
    justifyContent: 'space-between',
  },
  scrollContentForm: {
    height: '80%',
    paddingBottom: 20,
  },
  buttonTerm: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
  },
  buttonTermText: {
    fontSize: 16,
    fontWeight: '600',
    color: theme.colors.white,
    lineHeight: 22,
    textAlignVertical: 'center',
  },
})
