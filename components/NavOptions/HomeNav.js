import { View, Text, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { Marker, Circle } from "react-native-maps";

const HomeNav = () => {
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
    })();
  }, []);

  return (
    <>
      {/* Section of Adding friends and family members starts here */}
      <View className="flex-row bg-white mt-0 p-2 items-center justify-between">
        <View>
          <Text className="font-bold text-xl text-[#E75480]">Add Friends</Text>
          <Text className="text-xs font-light text-red-400">
            Add a friend to use SOS and Track
          </Text>
        </View>
        <View>
          <Button
            title="Add Friends"
            color={"#E75480"}
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
        <View className="absolute bottom-20 self-center">
          <Button
            title="Track me"
            color={"#E75480"}
            radius={"lg"}
            raised={true}
            onPress={() => {}}
          />
        </View>
      </View>
    </>
  );
};

export default HomeNav;

const Styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
