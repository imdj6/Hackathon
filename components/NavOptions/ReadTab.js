import { View, Text } from "react-native";
import React from "react";

const ReadTab = () => {
  return (
    <View>
      <View className="flex-row bg-white mt-0 p-2 items-center justify-between">
        <View>
          <Text className="font-bold text-xl text-[#E75480]">
            Tips For Women Safety
          </Text>
          <Text className="text-xs font-light text-red-400">
            Read The below Section To Protect Yourself
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ReadTab;
