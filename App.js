import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";
import SignupScreen from "./screens/SignupScreen";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

const Stack=createNativeStackNavigator();
export default function App() {
  const user=false;
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {
          user?(
            <>
            <Stack.Screen name="Home" component={HomeScreen} />
            </>
          ):(
            <>
            <Stack.Screen name="Main" component={MainScreen} />    
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            </>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

