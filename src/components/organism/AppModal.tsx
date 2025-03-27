import {ModalHeader} from '../molecule/ModalHeader.tsx';

import {Modal, View, Text, StyleSheet, useColorScheme} from 'react-native';

interface AppModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AppModal = ({visible, onClose}: AppModalProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.overlay}>
        <View
          style={[
            styles.modalContent,
            {backgroundColor: isDarkTheme ? '#000' : '#fff'},
            {borderColor: isDarkTheme ? '#fff' : '#000'},
          ]}>
          <ModalHeader onPress={onClose} />
          <Text
            style={[
              styles.description,
              {color: isDarkTheme ? '#fff' : '#000'},
            ]}>
            Ups... se encontró un error, intente de nuevo más tarde.
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    minHeight: 200,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
  },
  description: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
});
