import { icons } from "@/constants";
import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";

type Video = {
  id: number;
  title: string;
  url: string;
  avatar: ImageSourcePropType;
  creator: string;
  thumbnail: ImageSourcePropType;
};

const VideoCard = ({ video }: { video: Video }) => {
  const [play, setPlay] = useState<boolean>(false);

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

        <View className="pt-2">
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {play ? (
        <Text className="text-white">Playing</Text>
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
