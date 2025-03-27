import FilmsScreen from '../screens/tabs/FilmsScreen.tsx';
import {Image, StyleSheet, useColorScheme} from 'react-native';
import ICONS from '../assets/images';
import PlanetsScreen from '../screens/tabs/PlanetsScreen.tsx';
import PeopleScreen from '../screens/tabs/PeopleScreen.tsx';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const TabsNavigation = () => {
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDarkTheme ? '#121212' : '#fff', // Color del fondo
          borderTopColor: isDarkTheme ? '#333' : '#ccc', // Borde superior del tab
        },
        tabBarActiveTintColor: isDarkTheme ? '#fff' : '#000', // Color del ícono activo
        tabBarInactiveTintColor: isDarkTheme ? '#888' : '#666', // Color del ícono inactivo
      }}>
      <Tab.Screen
        name="Peliculas"
        component={FilmsScreen}
        options={{
          headerShown: false,
          title: 'Peliculas',
          tabBarIcon: ({color}) => (
            <Image
              source={ICONS.FILM}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Planetas"
        component={PlanetsScreen}
        options={{
          headerShown: false,
          title: 'Planetas',
          tabBarIcon: ({color}) => (
            <Image
              source={ICONS.PLANET}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Personajes"
        component={PeopleScreen}
        options={{
          headerShown: false,
          title: 'Personajes',
          tabBarIcon: ({color}) => (
            <Image
              source={ICONS.PEOPLE}
              style={[styles.icon, {tintColor: color}]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
