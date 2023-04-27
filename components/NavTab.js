import { View, Text } from "react-native";
import React from "react";
import {MapPinIcon,MicrophoneIcon,BookOpenIcon,DevicePhoneMobileIcon,BellAlertIcon} from 'react-native-heroicons/solid'
import { useNavigation } from "@react-navigation/native";

const NavTab = () => {

  const navigation = useNavigation();

  return (
    <View className='flex-row bottom-0  bg-white p-3 py-3 shadow-2xl mx-1 shadow-black rounded-3xl justify-between items-center'>
      <View className='space-y-2 flex justify-center items-center'><MapPinIcon  color="#E75480" size={30}/><Text className='text-[#E75480]'>Track Me</Text></View>
      <View className='space-y-2 flex justify-center items-center'><MicrophoneIcon  color="black" size={30}/><Text>Record</Text></View>
      <View className='space-y-2 flex justify-center items-center'><BellAlertIcon  color="red" size={30}/><Text className='text-red-500'>SOS</Text></View>
      <View className='space-y-2 flex justify-center items-center'><BookOpenIcon  color="black" size={30}/><Text>Read</Text></View>
      <View className='space-y-2 flex justify-center items-center'><DevicePhoneMobileIcon onPress={()=>{
        navigation.push("HelplineCard");
      }} color="black" size={30}/><Text>Helpline</Text></View>
    </View>
  );
};

export default NavTab;


