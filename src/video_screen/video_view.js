import React from "react";
// import {Card} from 'react-native-paper';
import { StyleSheet, View } from "react-native";
import { Card, Text } from 'react-native-paper';

const VideoView = () => {
    return (
       <>
            <Card>
                <Text>Here is a card</Text>
            </Card>
            </>
    );
}

// Container: Card
// Row {img thumbnail, timeline, controlButtonGrid}

/*
cbg:
col{
    row{
        hideButton
        saveButton
    }
    deleteButtonWithCheckBox
}
*/

// export default VideoView;
export default VideoView;