import {View, StyleSheet, useColorScheme} from 'react-native';
import {Icon} from './Icon.tsx';
import {LabelWithText} from './LabelWithText.tsx';

interface LabelIconProps {
  icon: string;
  label: string;
  text?: string;
}

export const LabelIcon: React.FC<LabelIconProps> = ({
  icon,
  label,
  text,
}: LabelIconProps) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <View style={styles.container}>
      <Icon name={icon} size={20} color={isDarkTheme ? '#fff' : '#000'} />
      <LabelWithText label={label} text={text!} isIcon={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
});
