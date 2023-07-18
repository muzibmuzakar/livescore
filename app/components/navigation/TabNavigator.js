import { Animated, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/HomeScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import Octicons from "react-native-vector-icons/Octicons";
import { colors, sizes } from "../../constants/theme";
import ScheduleScreen from "../../screens/ScheduleScreen";

const tabs = [
  {
    name: "Home",
    screen: HomeScreen,
    icon: "home",
  },
  {
    name: "Schedule",
    screen: ScheduleScreen,
    icon: "calendar",
  },
  {
    name: "Profile",
    screen: ProfileScreen,
    icon: "person",
  },
];

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const offsetAnimation = React.useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tab,
        }}
      >
        {tabs.map(({ name, screen, icon }, index) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={screen}
              options={{
                tabBarIcon: ({ focused }) => {
                  return (
                    <Octicons
                      name={icon}
                      size={28}
                      color={focused ? colors.primary : colors.gray}
                    />
                  );
                },
              }}
              listeners={{
                focus: () => {
                  Animated.spring(offsetAnimation, {
                    toValue: index * (sizes.width / tabs.length),
                    useNativeDriver: true,
                  }).start();
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX: offsetAnimation,
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tab: {
    height: 60,
    paddingBottom: 5,
    borderTopWidth: 0,
    backgroundColor: "#fff"
  },
  indicator: {
    position: "absolute",
    width: 10,
    height: 2,
    left: sizes.width / tabs.length / 2 - 5,
    bottom: 10,
    backgroundColor: colors.primary,
    zIndex: 100,
  },
});
