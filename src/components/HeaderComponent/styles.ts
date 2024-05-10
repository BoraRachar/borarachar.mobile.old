import { StyleSheet } from 'react-native'
import { theme } from '@/src/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.gray,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    color: theme.colors.textGray,
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
  },
  leftIcon: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: -15,
  },
  rightIcon: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
})
