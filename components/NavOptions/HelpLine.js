import { View, Text } from "react-native";
import React from "react";
import { Button } from "@rneui/base";

const HelpLine = () => {
  return (
    <View>
      <View className="flex-row bg-white mt-0 p-2 items-center justify-between">
        <View>
          <Text className="font-bold text-xl text-[#E75480]">Call For Help</Text>
          <Text className="text-xs font-light text-red-400">
            In case of an emergency, call number for help
          </Text>
        </View>

      </View>
    </View>
  );
};

export default HelpLine;
