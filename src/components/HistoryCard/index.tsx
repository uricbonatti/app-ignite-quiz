import { Text, View } from 'react-native';

import { styles } from './styles';
import { LevelBars } from '../LevelBars';

export type HistoryProps = {
  id: string;
  title: string;
  points: number;
  questions: number;
  level: number;
};

type Props = {
  data: HistoryProps;
};

export function HistoryCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.title}</Text>

        <Text style={styles.subtitle}>
          Você acertou {data.points} de {data.questions}
        </Text>
      </View>

      <LevelBars level={data.level} />
    </View>
  );
}
