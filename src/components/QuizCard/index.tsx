import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View
} from 'react-native';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { styles } from './styles';
import { QUIZZES } from '../../data/quizzes';
import { THEME } from '../../styles/theme';
import { LevelBars } from '../LevelBars';

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

type Props = TouchableOpacityProps & {
  data: (typeof QUIZZES)[0];
  index: number;
};

export function QuizCard({ index, data, ...rest }: Props) {
  const Icon = data.svg;

  return (
    <TouchableOpacityAnimated
      entering={FadeInUp.delay(100).duration(index * 100)}
      style={styles.container}
      {...rest}
    >
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          {Icon && <Icon size={24} color={THEME.COLORS.GREY_100} />}
        </View>

        <LevelBars level={data.level} />
      </View>

      <Text style={styles.title}>{data.title}</Text>
    </TouchableOpacityAnimated>
  );
}
