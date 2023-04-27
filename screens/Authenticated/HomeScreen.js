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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HelpLine from "../../components/NavOptions/HelpLine";
import {MapPinIcon,MicrophoneIcon,BookOpenIcon,DevicePhoneMobileIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import ReadTab from "../../components/NavOptions/ReadTab";
import RecordTab from "../../components/NavOptions/RecordTab";

const HomeScreen = ({ navigation }) => {
  const Tab = createBottomTabNavigator();

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
      <Tab.Navigator>
        <Tab.Screen
          name="Track Me"
          component={HomeNav}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MapPinIcon color="black" size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Record"
          component={HelpLine}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MicrophoneIcon color="black" size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="SOS"
          component={HelpLine}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <BellAlertIcon color="red" size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Read"
          component={ReadTab}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <BookOpenIcon color="black" size={25} />
            ),
          }}
        />
        <Tab.Screen
          name="Helpline"
          component={HelpLine}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <DevicePhoneMobileIcon color="black" size={25} />
            ),
          }}
        />
      </Tab.Navigator>
      {/* <NavTab /> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

// BellAlertIcon