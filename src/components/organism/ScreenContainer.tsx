import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

interface ScreenContainerProps {
  children: React.ReactNode;
  refreshing?: boolean;
  onRefresh?: () => void;
  bottomSheet?: React.ReactNode;
  onSearch?: React.ReactNode;
  overlayView?: React.ReactNode;
}

export const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  refreshing,
  onRefresh,
  onSearch,
  bottomSheet,
  overlayView,
}) => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <SafeAreaView
      style={[
        styles.safeArea,
        {backgroundColor: isDarkTheme ? '#000' : '#fff'},
      ]}>
      {onSearch}
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
          onRefresh ? (
            <RefreshControl refreshing={refreshing!} onRefresh={onRefresh} />
          ) : undefined
        }>
        <View style={styles.content}>{children}</View>
      </ScrollView>
      {overlayView}
      {bottomSheet}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
});
