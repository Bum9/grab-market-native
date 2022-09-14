import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import MainScreen from "./screens/main";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/product";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen
            name="main"
            component={MainScreen}
            options={{
              title: "홈 화면",
            }}
          />
          <Stack.Screen
            name="Product"
            component={ProductScreen}
            options={{
              title: "상품 화면",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});
