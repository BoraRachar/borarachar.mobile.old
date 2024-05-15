import { Pressable, Text, View } from 'react-native'
import { styles } from './styles'
import { useRouter } from 'expo-router'

import CloseFramer from '@/src/assets/images/closeFrame.svg'
import ResetPasswordSucess from '@/src/assets/images/reset-password-sucess.svg'

export default function Sucess() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sucesso</Text>
        <Pressable
          style={{ position: 'absolute', top: 16, right: 0 }}
          onPress={() => router.replace('/')}
        >
          <CloseFramer />
        </Pressable>
      </View>

      <View>
        <View style={{ alignItems: 'center', marginTop: 24 }}>
          <ResetPasswordSucess />
        </View>

        <View style={{ marginTop: 42 }}>
          <Text style={styles.subtitle}>Senha redefinida com sucesso!</Text>
          <Text style={styles.description}>
            Enviaremos uma notificação por e-mail confirmando a criação de uma
            nova senha.
          </Text>
        </View>
      </View>
    </View>
  )
}
