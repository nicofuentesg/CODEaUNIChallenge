import {Icon} from '../atoms/Icon.tsx';
import ICONS from '../../assets/images';
import {Text, useColorScheme, View} from 'react-native';

export const EmptyState = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Icon
        name={ICONS.STARSHIP}
        size={30}
        color={isDarkTheme ? 'white' : 'black'} // Color dinámico para el ícono
      />
      <Text style={{marginRight: 4, color: isDarkTheme ? 'white' : 'black'}}>
        ¡Oops! No se encontraron resultados
      </Text>
    </View>
  );
};
