import {View, Text, StyleSheet, useColorScheme} from 'react-native';

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
}
export const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  children,
}: SectionContainerProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <View style={styles.container}>
      <Text style={[styles.title, {color: isDarkTheme ? '#fff' : '#000'}]}>
        {title}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
