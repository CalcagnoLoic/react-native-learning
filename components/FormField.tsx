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
    <View className={`space-y-2 ${otherStyle}`}>
      <Text className="text-base text-gray-100 font-pmedium">FormField</Text>
    </View>
  );
};
export default FormField;
