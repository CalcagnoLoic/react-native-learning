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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container__view}>
          <Image
            source={images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.primary_title}>Log in to Aora</Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e: any) => setForm({ ...form, email: e })}
            otherStyle={styles.form_field}
            keyboardType="email-address"
          />

          <FormField
            title="password"
            value={form.password}
            handleChangeText={(e: any) => setForm({ ...form, password: e })}
            otherStyle={styles.form_field}
            keyboardType="password"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default signIn;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161622",
    height: "100%",
  },
  container__view: {
    justifyContent: "center",
    paddingHorizontal: 16,
    width: "100%",
    height: "100%",
    marginVertical: 20,
  },
  logo: {
    width: 115,
    height: 35,
  },
  primary_title: {
    color: "white",
    fontWeight: "semibold",
    marginTop: 20,
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
  form_field: {
    marginTop: 14
  }
});
