import { View, Text, SafeAreaView, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { BellIcon, Bars3Icon } from "react-native-heroicons/outline";
import { Button } from "@rneui/base";
import MapView, { Marker,Circle } from "react-native-maps";
import * as Location from "expo-location";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState();
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let currentlocation = await Location.getCurrentPositionAsync({});
      setLocation(currentlocation);
      console.log(currentlocation);
    })();
  }, []);

  return (
    <SafeAreaView className="mt-10 flex-1">
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
            <BellIcon color="black" size={30} />
          </View>
          <View>
            <Bars3Icon color="black" size={30} />
          </View>
        </View>
      </View>
      {/* Section of Adding friends and family members starts here */}
      <View className="flex-row bg-white mt-1 p-2 items-center justify-between">
        <View>
          <Text className="font-bold text-xl">Add Friends</Text>
          <Text className="text-xs font-light">
            Add a friend to use SOS and Track
          </Text>
        </View>
        <View>
          <Button
            title="Add Friends"
            color={"red"}
            radius={"md"}
            raised={true}
            onPress={() => {}}
          />
        </View>
      </View>

      {/* section having map View involved  and using maps*/}
      <View className=" p-2">
        {location && (
          <MapView
            style={Styles.map}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            mapType="mutedStandard"
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              title="Current Location"
              identifier="current location"
              pinColor="gold"
            />
            <Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={1000}
            />
          </MapView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "75%",
  },
});
