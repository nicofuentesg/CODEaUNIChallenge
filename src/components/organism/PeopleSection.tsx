import {People} from '../../models/People.ts';
import {StyleSheet, View} from 'react-native';
import {SectionContainer} from '../molecule/SectionContainer.tsx';
import ICONS from '../../assets/images';
import {RightArrowCard} from '../molecule/RightArrowCard.tsx';
import {InfoSection} from '../molecule/InfoSection.tsx';

interface PeopleSectionProps {
  people: People;
}

export const PeopleSection: React.FC<PeopleSectionProps> = ({
  people,
}: PeopleSectionProps) => {
  return (
    <SectionContainer title={people.nombre}>
      <View style={styles.sectionInformation}>
        <View style={{flex: 1}}>
          <InfoSection
            title={'Información General'}
            details={'Presiona para conocer más detalles'}
            icon={ICONS.INFORMATION}
          />
        </View>
        <View style={styles.sectionRightInformation}>
          <RightArrowCard icon={ICONS.RIGHTARROW} />
        </View>
      </View>
    </SectionContainer>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: 'column',
    paddingVertical: 8,
    alignItems: 'flex-start',
    paddingLeft: 8,
  },
  sectionInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionRightInformation: {
    justifyContent: 'center',
  },
});
