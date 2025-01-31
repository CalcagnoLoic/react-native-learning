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

export type fieldProperties = {
  title: string;
  value: string;
  handleChangeText: (newValue: any) => void;
  otherStyles: string;
  keyboardType?: string;
  placeholder?: string
};
