import React, { createContext, useContext, useState,useEffect } from "react"
// import { GoogleSignin } from '@react-native-google-signin/google-signin';



const AuthContext=createContext({

});




export const AuthProvider = ({ children }) => {

  // GoogleSignin.configure({
  //   webClientId: '342821669054-5aaso3qtev6gv5ek9utu2gl5t8hr57m2.apps.googleusercontent.com',
  // });
  


  // async function onGoogleButtonPress() {
  //   // Check if your device supports Google Play
  //   await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  
  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }

  return (
    <AuthContext.Provider value={{
        user:"Danish",
        // onGoogleButtonPress,
    }}>
        {children}
    </AuthContext.Provider>
  )
};


export default function useAuth(){
    return useContext(AuthContext);
}