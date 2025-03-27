import {StyleSheet, View} from 'react-native';
import {LabelIcon} from '../atoms/LabelIcon.tsx';

interface InfoSectionProps {
  title: string;
  details: string;
  icon: any;
}

export const InfoSection: React.FC<InfoSectionProps> = ({
  title,
  details,
  icon,
}: InfoSectionProps) => {
  return (
    <View style={[styles.sectionText]}>
      <LabelIcon icon={icon} label={title} text={details} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionText: {
    flex: 1,
    paddingTop: 16,
  },
});
