import { AVPlaybackSource } from "expo-av";
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
  initialQuery?: string;
};

export type EmptyFlatList = {
  title: string;
  subtitle: string;
};

export type trendingTypes = {
  posts: {
    id: number;
    thumbnail: ImageSourcePropType;
    uri: AVPlaybackSource;
  }[];
};

type item = {
  id: number;
  thumbnail: ImageSourcePropType;
  uri: AVPlaybackSource;
};

export type TrendingItems = {
  activeItem: item;
  item: item;
};

export type VideoTypes = {
  id: number;
  title: string;
  url: AVPlaybackSource | string;
  avatar: ImageSourcePropType;
  creator: string;
  thumbnail: ImageSourcePropType;
};

export type userInformation = {
  title: string;
  containerStyles?: string;
  titleStyle?: string;
  subtitle?: string;
};

export type newVideo = {
  title: string;
  video: AVPlaybackSource | null;
  thumbnail: ImageSourcePropType | null;
  prompt: string;
};
