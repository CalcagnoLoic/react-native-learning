import { icons } from "@/constants";
import { AVPlaybackSource, ResizeMode, Video } from "expo-av";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  Alert,
} from "react-native";
import { VideoTypes } from "@/definitions";

const VideoCard = ({ video }: { video: VideoTypes }) => {
  const [play, setPlay] = useState<boolean>(false);

  const submitAlert = () => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to liked this video?",
      [
        {
          text: "Of course",
          onPress: () => console.log("Liked!"),
          style: "default",
        },
        {
          text: "Don't like it",
          onPress: () => console.log("Unlike"),
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center flex-1 items-center flex-row">
          <View className="w-[46px] h-[46px] rounded-lg justify-center items-center p-0.5 ">
            <Image
              source={video.avatar}
              className="w-[46px] h-[46px] rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-sm font-psemibold text-white"
              numberOfLines={1}
            >
              {video.title}
            </Text>
            <Text
              className="text-gray-100 font-pregular text-xs"
              numberOfLines={1}
            >
              {video.creator}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={submitAlert}>
          <View className="pt-2">
            <Image
              source={icons.menu}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>

      {play ? (
        /*<Video
          source={video.url as AVPlaybackSource}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
           onPlaybackStatusUpdate={(status) => {
            if ("didJustFinish" in status && status.didJustFinish) {
              setPlay(false);
            }
          }}
        /> */ <Text>Clicking</Text>
      ) : (
        <TouchableOpacity
          className="w-full h-56 rounded-xl mt-3 relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={video.thumbnail}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
