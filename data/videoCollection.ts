import avatarImg from "@/assets/images/videoCollection/avatar.png";
import video1 from "@/assets/images/videoCollection/video1.png";
import video2 from "@/assets/images/videoCollection/video2.png";
import video3 from "@/assets/images/videoCollection/video3.png";
import avatarJS from "@/assets/images/profile.png";

export const videoCollection = [
  {
    id: 3,
    title: "React Native Course for Beginners in 2024",
    url: "https://www.youtube.com/watch?v=ZBCUegTZF7M",
    avatar: avatarJS,
    creator: "JSMastery",
    thumbnail: video3,
    liked: true,
  },
  {
    id: 1,
    title: "On teste tous les Jouets McDo du monde",
    url: "https://www.youtube.com/watch?v=ri9X2RnFINQ",
    avatar: avatarImg,
    creator: "FuzeII",
    thumbnail: video1,
    liked: false,
  },
  {
    id: 2,
    title: "Mon premier urbex !",
    url: "https://www.youtube.com/watch?v=3KMRZzN34SE",
    avatar: avatarImg,
    creator: "Emma",
    thumbnail: video2,
    liked: true,
  },
];
