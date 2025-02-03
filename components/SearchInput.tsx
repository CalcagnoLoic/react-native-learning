import { icons } from "@/constants";
import { SearchBar } from "@/definitions";
import { router, usePathname } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SearchInput = ({ initialQuery }: SearchBar) => {
  const pathname = usePathname();
  const [query, setQuery] = useState<string>(initialQuery || "");

  return (
    <View className="w-full h-16 px-4 border-2 border-black-200 rounded-2xl bg-black-100 focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        className="text-base text-white font-pregular mt-0.5 flex-1"
        value={query}
        placeholderTextColor="#CDCDE0"
        placeholder="Search for a video topic"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database"
            );
          }

          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};
export default SearchInput;
