import { StyleSheet, Text, View } from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyle,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.form_title}>FormField</Text>
    </View>
  );
};
export default FormField;
const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  form_title: {
    fontSize: 16,
    color: "#f3f4f6",
    fontFamily: "PoppinsMedium",
  },
});
