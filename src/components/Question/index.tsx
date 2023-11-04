import { Text, Dimensions } from 'react-native';
import Animated, { Keyframe } from 'react-native-reanimated';

import { styles } from './styles';
import { Option } from '../Option';

type QuestionProps = {
  title: string;
  alternatives: string[];
};

type Props = {
  question: QuestionProps;
  alternativeSelected?: number | null;
  setAlternativeSelected?: (value: number) => void;
};

const SREEN_WIDTH = Dimensions.get('window').width;

export function Question({
  question,
  alternativeSelected,
  setAlternativeSelected
}: Props) {
  const enteringKeyframe = new Keyframe({
    0: {
      opacity: 0,
      transform: [{ translateX: SREEN_WIDTH }, { rotate: '90deg' }]
    },
    70: { opacity: 0.3 },
    100: {
      opacity: 1,
      transform: [{ translateX: 0 }, { rotate: '0deg' }]
    }
  });

  // const exitingKeyframe = new Keyframe({
  //   0: {
  //     opacity: 1,
  //     transform: [{ translateX: 0 }, { rotate: '0deg' }]
  //   },
  //   30: { opacity: 0.3 },
  //   100: {
  //     opacity: 0,
  //     transform: [{ translateX: -SREEN_WIDTH }, { rotate: '-90deg' }]
  //   }
  // });
  const exitingKeyframe = new Keyframe({
    from: {
      opacity: 1,
      transform: [{ translateX: 0 }, { rotate: '0deg' }]
    },
    to: {
      opacity: 0,
      transform: [{ translateX: -SREEN_WIDTH }, { rotate: '-90deg' }]
    }
  });

  return (
    <Animated.View
      style={styles.container}
      entering={enteringKeyframe.duration(400)}
      exiting={exitingKeyframe}
    >
      <Text style={styles.title}>{question.title}</Text>

      {question.alternatives.map((alternative, index) => (
        <Option
          key={index}
          title={alternative}
          checked={alternativeSelected === index}
          onPress={() =>
            setAlternativeSelected && setAlternativeSelected(index)
          }
        />
      ))}
    </Animated.View>
  );
}
