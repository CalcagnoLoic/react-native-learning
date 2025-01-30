import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  Dimensions,
} from "react-native";

import { images } from "@/constants";
import FormField from "@/components/FormField";
import { useState } from "react";

const { height } = Dimensions.get("window");
const heightInPix = height * 0.85;

const signIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full  px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
            keyboardType="password"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default signIn;
