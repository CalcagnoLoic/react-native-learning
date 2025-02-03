import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import { useGlobalContext } from "@/context/GlobalProvider";
import { useState, useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoCard from "@/components/VideoCard";
import { videoCollection } from "@/data/videoCollection";
import { router, useLocalSearchParams } from "expo-router";
import { icons, images } from "@/constants";
import InfoBox from "@/components/InfoBox";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const [searchQuery, setSearchQuery] = useState<string>(user.name || "");
  const [filteredVideos, setFilteredVideos] = useState(videoCollection);

  useEffect(() => {
    const results = videoCollection.filter((video) =>
      video.creator.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredVideos(results);
  }, [searchQuery]);

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };

  return (
    <SafeAreaView className="bg-primary h-full border-primary">
      <FlatList
        data={filteredVideos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-6 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mb-10"
              onPress={logout}
            >
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>

            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={images.profile}
                className="w-16 h-16 rounded-lg"
                resizeMode="cover"
              />
            </View>

            <InfoBox
              title={user.name}
              containerStyles="mt-5"
              titleStyle="text-lg"
            />

            <View className="mt-5 flex-row">
              <InfoBox
                title={filteredVideos.length.toString() || "0"}
                subtitle={filteredVideos.length === 1 ? "Post" : "Posts"}
                containerStyles="mr-10"
                titleStyle="text-xl"
              />
              <InfoBox title="1.2k" subtitle="Followers" titleStyle="text-xl" />
            </View>
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

export default Profile;
