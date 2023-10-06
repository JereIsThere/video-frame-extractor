import { useState } from "react";
import { FlatList, View } from "react-native";
import * as FileSystem from 'expo-file-system';
import { Image } from "expo-image";
import VideoCard from "./video_card";
import { Text } from "react-native-paper";

type VideoListProps = {
    folderUri: string,
    videoPaths: string[]
};

const VideoList = (props: VideoListProps) => {

    return (
        <>
            <Text>{props.videoPaths.length}</Text>
            <FlatList
                data={props.videoPaths}
                renderItem={item =>
                    <VideoCard uri={item.item} />
                    // <Image source={item.item} style={{width: 100, height: 100}} />
                }
                keyExtractor={(item, index) => index}
                extraData={props.folderUri}
            />
        </>
    );
};

export default VideoList;

{// <View flex={1}>
}
{/* // <VideoCard uri={item.item} /> */ }
// <Image source={item.item} />
{/* </View> */ }