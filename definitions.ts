import { ImageSourcePropType, TextStyle, ViewStyle } from "react-native";

export type tabsIcons = {
  icon: ImageSourcePropType;
  color: string;
  name: string;
  focused: boolean;
};

export type customButton = {
  title: string;
  handlePress: () => void;
  containerStyles: string;
  textStyles?: TextStyle;
  isLoading: boolean;
};
