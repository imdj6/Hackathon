import { View, Text ,SafeAreaView,Image} from 'react-native'
import React from 'react'
import { XMarkIcon,PencilIcon } from "react-native-heroicons/outline";
import UserBoxes from '../../components/UserBoxes';
const UserInfo = ({navigation}) => {
  return (
    <SafeAreaView className='mt-10 flex-1'>
        {/* {Navigation Part Starts Here } */}
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
          {/* <View>
            <BellIcon color="black" size={30} />
          </View> */}
          <View>
            <XMarkIcon
              color="black"
              size={30}
              onPress={() => {
                navigation.push("Home");
              }}
            />
          </View>
        </View>
      </View>
      {/* {Navigation Part Ends Here For the UserInfo Page} */}

      {/* {User Info Container Starts Here} */}
      <View className='bg-white p-5 m-2 rounded-3xl mt-2 flex-row items-center justify-between'>
        <View className='flex-row items-center space-x-5'>
            <View>
                <Image
                 source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Y3xGA-xeTqioR6RSXK-0b1YN2XpGJviHhA",
                  }}
                  style={{ width: 60, height: 60 }}
                  className="rounded-full object-contain"
                />
            </View>
            <View className='flex space-y-1'>
                <Text className='text-lg'>Danish Jamal</Text>
                <Text className='text-xs'>+91 9939268896</Text>
            </View>
        </View>
        <View className='mr-5'>
            <PencilIcon color='black'/>
        </View>
      </View>

      {/* {Different Boxes starts here } */}

      <View className='flex-row flex-wrap justify-between space-x-10'>
        <UserBoxes/>
        <UserBoxes/>
        <UserBoxes/>
        <UserBoxes/>
        <UserBoxes/>
        <UserBoxes/>
      </View>


      {/* {Different Boxes ends here } */}
    </SafeAreaView>
  )
}

export default UserInfo