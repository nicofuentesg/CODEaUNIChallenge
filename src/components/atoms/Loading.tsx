import {ActivityIndicator, View, StyleSheet} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
