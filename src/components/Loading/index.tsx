import { ActivityIndicator, View } from 'react-native';

import { styles } from './styles';
import { THEME } from '../../styles/theme';

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={THEME.COLORS.BRAND_LIGHT} />
    </View>
  );
}
