import {StyleSheet, View} from 'react-native';
import {ModalCloseButton} from '../atoms/ModalCloseButton.tsx';

interface ModalHeaderProps {
  onPress: () => void;
}

export const ModalHeader = ({onPress}: ModalHeaderProps) => {
  return (
    <View style={styles.header}>
      {/* Header Content */}
      <ModalCloseButton onPress={onPress} />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
