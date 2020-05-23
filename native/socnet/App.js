import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import "react-native-gesture-handler";

import {
  NavigationContainer,
  useNavigation,
  useRoute,
  DrawerActions,
} from "@react-navigation/native";
import {
  createDrawerNavigator,
  useIsDrawerOpen,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as BoardProvider } from "./src/context/BoardContext";

import ActiveScreen from "./src/screens/ActiveScreen";
import ExploreScreen from "./src/screens/ExploreScreen";
import SubscriptionsScreen from "./src/screens/SubscriptionsScreen";
import BoardScreen from "./src/screens/BoardScreen";

import { Feather } from "@expo/vector-icons";
import AllBoardsScreen from "./src/screens/AllBoardsScreen";
import NewPostScreen from "./src/screens/NewPostScreen";
import PostScreen from "./src/screens/PostScreen";

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Subscriptions" component={SubscriptionsScreen} />
      <Tab.Screen name="Active" component={ActiveScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerContainer(props) {
  return (
    <Drawer.Navigator drawerType="slide" statusBarAnimation="fade">
      <Drawer.Screen
        name="SocNet"
        component={Home}
        options={{ title: "Home" }}
      />
      <Drawer.Screen
        name="All Boards"
        component={AllBoardsScreen}
        options={{ title: "All Boards" }}
      />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <BoardProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="screen">
            <Stack.Screen
              name="Home"
              component={DrawerContainer}
              options={{
                headerLeft: () => <HeaderLeft />,
                headerRight: () => <HeaderRight />,
              }}
            />
            <Stack.Screen name="Board" component={BoardScreen} options={{}} />
            <Stack.Screen
              name="New Post"
              component={NewPostScreen}
              options={{}}
            />
            <Stack.Screen name="Post" component={PostScreen} options={{}} />
          </Stack.Navigator>
        </NavigationContainer>
      </BoardProvider>
    </SafeAreaProvider>
  );
}

function HeaderRight() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("New Post")}>
      <Feather name="plus" style={styles.header} />
    </TouchableOpacity>
  );
}

function HeaderLeft() {
  const navigation = useNavigation();
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      >
        <Feather name="menu" style={styles.header} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 30, marginHorizontal: 5 },
});

export default App;
