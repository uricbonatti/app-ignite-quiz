import { useNavigation, useRoute } from '@react-navigation/native';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';

interface Params {
  total: string;
  points: string;
}

export function Finish() {
  const route = useRoute();
  const { points, total } = route.params as Params;

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.title}>Parabéns!</Text>

        <Text style={styles.subtitle}>
          Você acertou {points} de {total} questões
        </Text>
      </View>

      <Button title="Ir para o início" onPress={() => navigate('home')} />
    </View>
  );
}
