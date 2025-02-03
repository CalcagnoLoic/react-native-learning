import { userInformation } from "@/definitions";
import { View, Text } from "react-native";

const InfoBox = ({
  title,
  containerStyles,
  titleStyle,
  subtitle,
}: userInformation) => {
  return (
    <View className={`${containerStyles}`}>
      <Text className={`text-white text-center font-psemibold  ${titleStyle}`}>
        {title}
      </Text>

      <Text className="text-sm text-gray-100 text-center font-pregular">
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
