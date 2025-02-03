import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { videoCollection } from "@/data/videoCollection";

import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import VideoCard from "@/components/VideoCard";

const Bookmark = () => {
  const [filteredVideos, setFilteredVideos] = useState(videoCollection);

  useEffect(() => {
    setFilteredVideos(videoCollection.filter((video) => video.liked === true));
  }, []);

  return (
    <SafeAreaView className="bg-primary h-full border-primary">
      <FlatList
        data={filteredVideos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4">
            <Text className="font-pmedium text-white text-3xl mb-10">
              Saved Videos
            </Text>

            <SearchInput otherPlaceholder="Search your saved videos" />
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

export default Bookmark;
