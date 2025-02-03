import { icons } from "@/constants";
import { TrendingItems, trendingTypes } from "@/definitions";
import { useState } from "react";
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  ViewStyle,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { ResizeMode, Video } from "expo-av";
import { WebView } from "react-native-webview";

const zoomIn = {
  0: {
    scale: 0.9,
  },
  1: {
    scale: 1,
  },
};
const zoomOut = {
  0: {
    scale: 1,
  },
  1: {
    scale: 0.9,
  },
};

const TrendingItem = ({ activeItem, item }: TrendingItems) => {
  const [play, setPlay] = useState<boolean>(false);

  return (
    <Animatable.View
      className="mr-5"
      animation={Number(activeItem) === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      {play ? (
        <Video
          source={item.uri}
          className="w-52 h-72 rounded-[35px] mt-3 bg-white/10"
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if ("didJustFinish" in status && status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="relative justify-center items-center"
          activeOpacity={0.7}
          onPress={(prevState) => setPlay(!prevState)}
        >
          <ImageBackground
            source={item.thumbnail}
            className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

const Trending = ({ posts }: trendingTypes) => {
  const [activeItem, setActiveItem] = useState(posts[1]);

  const viewableItemsChanged = ({ viewableItems }: any) => {
    if (viewableItems.length > 0) setActiveItem(viewableItems[0].key);
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170 }}
      horizontal
    />
  );
};

export default Trending;
