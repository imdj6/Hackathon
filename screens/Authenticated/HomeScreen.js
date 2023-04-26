import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { BellIcon, Bars3Icon } from "react-native-heroicons/outline";
import { Button } from "@rneui/base";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserInfo from "./UserInfo";
import UserBoxes from "../../components/UserBoxes";
import HomeNav from "../../components/NavOptions/HomeNav";
import NavTab from "../../components/NavTab";

const HomeScreen = ({ navigation }) => {


  const Stack = createNativeStackNavigator();

 

  return (
    <SafeAreaView className="flex-1 mt-9">
      <View className="flex-row items-center justify-between p-2 bg-white">
        <View>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y3xGA-xeTqioR6RSXK-0b1YN2XpGJviHhA",
            }}
            style={{ width: 40, height: 40 }}
            className=""
          />
        </View>
        <View className="flex-row space-x-5 mr-3">
          <View>
            <BellIcon color="#E75480" size={30} />
          </View>
          <View>
            <Bars3Icon
              color="#E75480"
              size={30}
              onPress={() => {
                navigation.push("User");
              }}
            />
          </View>
        </View>
      </View>
      <Stack.Navigator>
        <Stack.Screen
          name="NavigateCard"
          component={
            HomeNav
          }
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
      <NavTab/>
    </SafeAreaView>
  );
};

export default HomeScreen;


 

