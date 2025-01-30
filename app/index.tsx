import { Text, View, StyleSheet, ScrollView, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View style={styles.container__view}>
          <Image
            source={images.logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={styles.cards__logo}
            resizeMode="contain"
          />

          <View style={styles.onboarding__text}>
            <Text style={styles.primary_text}>
              Discover Endless Possibilities with{" "}
              <Text style={styles.text_secondary}>Aora</Text>
            </Text>
            <Image
              source={images.path}
              style={styles.underline_logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.paragraph}>
            Where creativity meets innovation: embark on a journey of limitless
            exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles={styles.button_style}
            isLoading={false}
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161622",
    flex: 1,
  },
  container__view: {
    alignItems: "center",
    paddingHorizontal: 16,
    width: "100%",
    minHeight: 85,
  },
  logo: {
    width: 130,
    height: 84,
  },
  cards__logo: {
    maxWidth: 380,
    height: 300,
    width: "100%",
  },
  onboarding__text: {
    position: "relative",
    marginTop: 10,
  },
  primary_text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  text_secondary: {
    color: "#FF8E01",
  },
  underline_logo: {
    width: 136,
    height: 15,
    position: "absolute",
    bottom: -5,
    right: -32,
  },
  paragraph: {
    fontSize: 10,
    fontFamily: "Poppins-Regular",
    color: "#f3f4f6",
    marginTop: 28,
    textAlign: "center",
  },
  button_style: {
    marginTop: 28,
    width: "100%",
  },
});
