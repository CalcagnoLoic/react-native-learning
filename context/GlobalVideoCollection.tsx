import React, { createContext, ReactNode, useContext, useState } from "react";
import { videoCollection as initialVideos } from "@/data/videoCollection";

const GlobalContext = createContext(null);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [videoCollection, setVideoCollection] = useState(initialVideos);

  return (
    <GlobalContext.Provider value={{ videoCollection, setVideoCollection }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
