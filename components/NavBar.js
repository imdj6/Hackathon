import { View, Text ,SafeAreaView,Image} from 'react-native'
import React from 'react'
import { BellIcon, Bars3Icon } from "react-native-heroicons/outline";

const NavBar = () => {
  return (
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
          <Bars3Icon
            color="black"
            size={30}
            onPress={() => {
              // navigation.push("User");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NavBar;
