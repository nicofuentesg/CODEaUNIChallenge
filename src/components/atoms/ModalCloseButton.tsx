import {StyleSheet, TouchableOpacity, useColorScheme} from 'react-native';
import ICONS from '../../assets/images';
import {Icon} from './Icon.tsx';

interface ModalCloseButtonProps {
  onPress: () => void;
}

export const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({
  onPress,
}: ModalCloseButtonProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <Icon
        name={ICONS.CLOSE}
        size={36}
        color={isDarkTheme ? '#fff' : '#000'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    flex: 1,
  },
});
