import {StyleSheet, TextInput, useColorScheme} from 'react-native';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({value, onChange}: SearchInputProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <TextInput
      style={[styles.input, {color: isDarkTheme ? '#fff' : '#000'}]}
      keyboardType={'default'}
      placeholder="Busqueda por nombre"
      scrollEnabled={false}
      maxLength={50}
      autoCapitalize={'none'}
      multiline={false}
      value={value}
      onChangeText={onChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});
