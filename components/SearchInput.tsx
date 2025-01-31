import { icons } from "@/constants";
import { SearchBar } from "@/definitions";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const SearchInput = ({placeholder}: SearchBar) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className="w-full h-16 px-4 border-2 border-black-200 rounded-2xl bg-black-100 focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base text-white font-pregular mt-0.5 flex-1"
        placeholderTextColor="#7b7b8b"
        placeholder={placeholder}
      />

      <TouchableOpacity>
        <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchInput;
