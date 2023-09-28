import React, { useState } from "react";
import { Text } from "react-native-paper";
import { StyleSheet } from "react-native-web";
import VideoView from "./video_view";

// Top of page:
// Row {Folder select icon, folder path display}
// Row {checkbox for deletion on save, tappable for default thumbnail time}
// Divider
// VideoList

const VideoScreen = () => {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <><Text>
      Welcome in the VideoView.
    </Text>
    <VideoView />
    </>
  );
}

export default VideoScreen;