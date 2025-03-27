import {StyleSheet, useColorScheme, View} from 'react-native';
import {Icon} from '../atoms/Icon.tsx';

interface RightArrowCardProps {
  icon: any;
}

export const RightArrowCard: React.FC<RightArrowCardProps> = ({
  icon,
}: RightArrowCardProps) => {
  const theme = useColorScheme(); // Detecta el tema actual
  const isDarkTheme = theme === 'dark'; // Determina si el tema es oscuro

  return (
    <View
      style={[
        styles.rightArrowContainer,
        {backgroundColor: isDarkTheme ? '#333' : '#f0f0f0'}, // Cambiar el color de fondo según el tema
      ]}>
      <Icon name={icon} size={20} color={isDarkTheme ? '#fff' : '#000'} />
    </View>
  );
};
const styles = StyleSheet.create({
  rightArrowContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
});
