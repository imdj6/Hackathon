import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const UserBoxes = (props) => {
  const Icon = props.icon
  return (
    <View className='bg-white p-4 border border-black rounded-xl mb-5'>
      <View className='flex-row items-center space-x-4'><Icon size={20} color="black" /><Text className='text-2xl font-bold'>{props.buttonText}</Text></View>
    </View>
  )
}

export default UserBoxes


// import React from 'react'
// import "./Button.css"
// const Button = (props) => {
//     const Icon = props.icon
//     return (
//         <button onClick={props.clickHandler} className={"button " + (props.active ? "active-button" : "cta-button")} style={props.properties}>
//             <span className='icon'><Icon size="1.3em" /></span>
//             {props.buttonText}
//         </button>
//     )
// }

// export default Button