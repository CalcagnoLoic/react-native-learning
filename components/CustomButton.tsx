import { customButton } from "@/definitions";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}: customButton) => {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyles, isLoading && { opacity: 0.5 }]}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text style={[styles.button_text, textStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FF8E01",
    borderRadius: 12,
    minHeight: 62,
    alignItems: "center",
    justifyContent: "center",
  },
  button_text: {
    color: "#161622",
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
  },
});
