import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Button } from '@rneui/themed';
const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className='mx-auto my-auto'>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y3xGA-xeTqioR6RSXK-0b1YN2XpGJviHhA",
          }}
          style={{width:140,height:140}}
        />
      <Text className='font-bold mt-16 mb-5'>Sign Up/Login with Email Id</Text>
      <Button title="Let's Go" color={'blue'} radius={'lg'} raised={true}/>
      </View>
      <Text className='font-bold mb-1 mx-auto'>By Continuing you agree that you have read and </Text>
      <Text className='font-bold mb-5 mx-auto'>accepted our <Text className='text-blue-700'>T&C</Text> and <Text className='text-blue-700'>Privacy Policy</Text> </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
