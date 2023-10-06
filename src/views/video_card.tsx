import { Image } from "expo-image";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { Button, Card } from "react-native-paper";
// import { Video, ResizeMode } from "expo-av";
// import * as AV from 'expo-av';
// import { Video, ResizeMode } from "expo-av";
import { FFmpegKit, ReturnCode } from 'ffmpeg-kit-react-native';

function VideoTest(uri: string){
  console.log("before start");
  FFmpegKit.execute(`-i ${uri} -c:v mpeg4 -y export.mp4`).then(async (session) => {
    const returnCode = await session.getReturnCode();
    console.log("start");
  
    if (ReturnCode.isSuccess(returnCode)) {
  
      // SUCCESS
      console.log("success!!!");
      
  
    } else if (ReturnCode.isCancel(returnCode)) {
  
      // CANCEL
      console.log("cancel!!!");
  
    } else {
  
      // ERROR
      console.log("error!!!");
    }
  });
}

type VideoCardProps = {
    uri: string
};

const VideoCard = (props: VideoCardProps) => {
    const [cursorTime, setCursorTime] = useState(0);

    return VideoTest(props.uri);
    // console.log(props.uri);

    return (
        <Card style={styles.card}>
            <View style={styles.row}>
                <Image source={props.uri} style={styles.image} />
                {/* <Video source={{ uri: props.uri }} /> */}
                <Button style={styles.button}>Press</Button>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: { padding: 5, margin: 5 },
    image: { height: 100, width: 75 },
    video: {height: 250, width: 250},
    button: { alignSelf: 'flex-end' },
    row: { display: "flex", flexDirection: "row" },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default VideoCard;