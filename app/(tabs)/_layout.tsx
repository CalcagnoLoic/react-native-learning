import { Image, StyleSheet, Text, View } from "react-native";
import { Tabs, Redirect } from "expo-router";
import { icons } from "@/constants";
import { tabsIcons } from "@/definitions";

const TabIcon = ({ icon, color, name, focused }:  tabsIcons ) => {
  return (
    <View style={styles.container__tabs}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        style={styles.tabs__home}
      />
      <Text
        style={{
          fontSize: 10,
          width: 100,
          textAlign: "center",
          fontFamily: focused ? "Poppins-SemiBold" : "Poppins-Regular",
          color: color,
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.plus}
              color={color}
              name="Create"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;

const styles = StyleSheet.create({
  tabs__home: {
    width: 20,
    height: 20,
  },
  container__tabs: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    marginTop: 10,
  },
});
