import { Link } from 'expo-router'
import { Text, View } from 'react-native'

export default function Index() {
  return (
    <View>
      <Text>Inicio</Text>
      <Link href="/reset-password/">Redefinir Senha</Link>
    </View>
  )
}
