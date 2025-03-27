import {StyleSheet, Text, useColorScheme, View} from 'react-native';

interface LabelWithTextProps {
  label: string;
  text: string;
  isIcon: boolean;
}

export const LabelWithText: React.FC<LabelWithTextProps> = ({
  label,
  text,
  isIcon = false,
}: LabelWithTextProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  return (
    <View style={[styles.textContainer, isIcon ? {paddingLeft: 8} : {}]}>
      <Text style={[styles.label, {color: isDarkTheme ? '#fff' : '#000'}]}>
        {label}
      </Text>
      <Text
        style={[
          styles.informationText,
          {color: isDarkTheme ? '#fff' : '#000'},
        ]}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  informationText: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '600',
    paddingTop: 4,
    flexWrap: 'wrap',
    flex: 1,
  },
});
