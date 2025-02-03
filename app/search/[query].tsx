import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useState, useEffect } from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoCard from "@/components/VideoCard";
import { videoCollection } from "@/data/videoCollection";
import { useLocalSearchParams } from "expo-router";

const Search = () => {
  const { query } = useLocalSearchParams() as { query?: string };
  const [searchQuery, setSearchQuery] = useState<string>(query || "");
  const [filteredVideos, setFilteredVideos] = useState(videoCollection);

  useEffect(() => {
    const results = videoCollection.filter(
      (video) =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        video.creator.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVideos(results);
  }, [searchQuery]);

  return (
    <SafeAreaView className="bg-primary h-full border-primary">
      <FlatList
        data={filteredVideos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-pmedium text-gray-100 text-sm">
              Search results for
            </Text>
            <Text className="text-2xl font-psemibold text-white mb-5">
              {searchQuery}
            </Text>
            <SearchInput
              initialQuery={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No Videos Found"
            subtitle="No videos found for this search query"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;
