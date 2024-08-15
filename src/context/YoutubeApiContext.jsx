import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

// const client = new FakeYoutubeClient() // Mock 데이터
const client = new YoutubeClient() // 찐 데이터
const youtube = new Youtube(client)

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
