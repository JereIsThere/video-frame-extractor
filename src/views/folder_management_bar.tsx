import { View } from "react-native";
import { Button, Text } from "react-native-paper";

type FolderManagementBarProps = {
    path: string,
    chooseFolder: () => void
};

function getText(path: string) {
    // console.log(path);
    if (path == "")
        return "No folder selected";

    else
        return path
}

const FolderManagementBar = (props: FolderManagementBarProps) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Button
                icon="folder"
                dark={true}
                mode='outlined'

                onPress={props.chooseFolder}>
                Choose
            </Button>

            <View style={{ width: 10 }} />

            <Text style={{ alignSelf: 'center' }}>
                {getText(props.path)}
            </Text>
        </View>
    );
}

export default FolderManagementBar;