import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'

import CloseFramer from '@/src/assets/images/closeFrame.svg'

export default function Sucess() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sucesso</Text>
        <Pressable style={{ position: 'absolute', top: 16, right: 0 }}>
          <CloseFramer />
        </Pressable>
      </View>
    </View>
  )
}
