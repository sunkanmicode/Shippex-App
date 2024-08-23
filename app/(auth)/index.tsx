import { View, Text, Image } from 'react-native'
import React from 'react'
import { CustomButton } from '@/components/custom-components/CustomButton';
import CustomBottomSheet from '@/components/custom-components/CustomBottomSheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LoginScreen from './login-screen';
import AminationComp from '@/components/AminationComp';

const GetStarted = () => {
    const SheetRef = React.useRef<null | any>(null);


   const height = hp(95);

   const closeSheet = () => {
     if (SheetRef.current) {
       SheetRef.current.close();
     }
   };
   const openSheet = () => {
     if (SheetRef.current) {
       SheetRef.current.open();
     }
   };
  return (
    <>
      <View className="flex-1 p-5 bg-[#2F50C1]">
        <View className=" items-center justify-center flex-1">
          <View className=" w-52 h-8">
            <Image
              source={require("../../assets/images/whitelogo.png")}
              className="w-full h-full"
            />
          </View>
        </View>
        <CustomButton priWhite title="Login" onPress={() => openSheet()} />
      </View>
      <CustomBottomSheet
        closeOnDragDown={false}
        height={height}
        ref={SheetRef}
        message={<LoginScreen closeSheet={closeSheet} />}
      />
      {/* <AminationComp /> */}
    </>
  );
}

export default GetStarted