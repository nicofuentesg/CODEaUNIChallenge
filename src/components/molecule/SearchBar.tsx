import {Dimensions, StyleSheet, useColorScheme, View} from 'react-native';
import {Icon} from '../atoms/Icon.tsx';
import {SearchInput} from '../atoms/SearchInput.tsx';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  icon: string;
}

const {height} = Dimensions.get('window');
export const SearchBar = ({value, onChange, icon}: SearchInputProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <View
      style={[styles.container, {borderColor: isDarkTheme ? '#fff' : '#000'}]}>
      <SearchInput value={value} onChange={onChange} />
      <Icon name={icon} size={24} color={isDarkTheme ? '#fff' : '#000'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: height * 0.05,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});
