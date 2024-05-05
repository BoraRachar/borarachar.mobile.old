import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export default function ResetPassword() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, backgroundColor: 'yellow' }}>
      <View style={{ flexGrow: 1, backgroundColor: '#eeeeee' }}>
        <View style={styles.header}>
          <Text style={styles.title}>Redefinir senha</Text>
        </View>
      </View>

      <View style={{ flexShrink: 1, paddingBottom: 24 }}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: 48,
            backgroundColor: '#545F71',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
            borderRadius: 6,
          }}
        >
          <Text>Nova Senha</Text>
          <Ionicons name="arrow-forward-outline" size={18} color="white" />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Text>Não recebeu o código?</Text>
          <Pressable>
            <Text>Enviar novamente</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
