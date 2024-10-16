import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


/*props: {
    sidebarOpen: string | boolean | undefined;
    setSidebarOpen: (arg: boolean) => void;
  }*/
export default function Header(props:{
    sidebarOpen:string|boolean|undefined; 
    setSidebarOpen:(arg:boolean)=>void}) {
  return (
   <View className="mt-8  bg-green-500 p-3 flex-row justify-between items-center">
    <Text className="text-white text-xl font-bold">Todo POST</Text>
    <View className="flex-row">
      <TouchableOpacity className="mx-2">
        <Text className="text-white">Inicio</Text>
      </TouchableOpacity>
    
    {/*  <TouchableOpacity className="mx-2">
        <Text className="text-white">Menu</Text>
      </TouchableOpacity> */}
    </View>
  </View>
  );
}


/**  */