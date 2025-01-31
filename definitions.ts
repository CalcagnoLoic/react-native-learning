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
  isLoading?: boolean;
};

export type fieldProperties = {
  title: string;
  value: string;
  handleChangeText: (newValue: any) => void;
  otherStyles: string;
  keyboardType?: string;
  placeholder?: string;
};

export type GlobalContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SearchBar = {
  placeholder: string;
};

export type EmptyFlatList = {
  title: string;
  subtitle: string;
};
