import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  //sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}
  return (

    <>
     
        {/* <!-- ===== Page Wrapper Start ===== --> */}
        <View className="flex-1">
        
        
          <View className="relative flex flex-1 flex-col lg:ml-72.5">
            {/* <!-- ===== Header Start ===== --> */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}  />
            {/* <!-- ===== Header End ===== --> */}

            {/* <!-- ===== Main Content Start ===== --> */}
            <View className="flex-1">
              <View className="mx-auto my-8 p-3 ">
                {children}
              </View>
            </View>
            {/* <!-- ===== Main Content End ===== --> */}

            <Footer/>

          </View>
          {/* <!-- ===== Content Area End ===== --> */}
      
        </View>
       
    </>
    

    

   
  );
}
