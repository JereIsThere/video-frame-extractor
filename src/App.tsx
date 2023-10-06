import * as FileSystem from 'expo-file-system';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import FolderManagementBar from './views/folder_management_bar';
import VideoList from './views/video_list';

const App = () => {
  const [path, setPath] = useState("");
  const strArray: string[] = [];
  const [videoPaths, setVideoPaths] = useState(strArray);

  const chooseFolder = async () => {
    var result = DocumentPicker?.pickDirectory();
    result.catch((reason) => {
      console.log("Rejected");
      return;
    });

    const folder = (await result).uri;
    setPath(folder ?? "nullpointer");
    loadImages(folder);
  }

  const loadImages = async (uri: string) => {
    if (uri == '')
      return

    var result =
      await FileSystem.StorageAccessFramework.readDirectoryAsync(uri);
    
    result = result.filter((value)=> value.toLowerCase().endsWith('mp4'));
    console.log("limiting videos to one.");
    result = [result[0]];

    setVideoPaths([]);
    setVideoPaths(result);
  }

  return (
    <>
      <View
        style={{ padding: 20 }}>
        <FolderManagementBar
          chooseFolder={chooseFolder}
          path={path} />

        <VideoList
          folderUri={path}
          videoPaths={videoPaths} />
      </View>

      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle={"dark-content"}
      />
    </>
  );
}

export default App;

{/* <VideoScreen></VideoScreen> */ }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  folderButton: {
    // height: 75,
    // width: 75,
    // alignSelf: 'flex-start',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// return (
//   <View
//     style={styles.container}>
//     <Text
//       flex={1}
//     >HALLO WAS ZUM FICK</Text>
//     <Button
//       style={styles.container}
//       buttonColor='blue'
//       textColor='white'
//       onPress={chooseFolder} children={<Text style={{ color: "white" }}>Test</Text>} />
//     <Text
//       flex={1}
//     >{path}</Text>
//     <View
//       flex={10}
//     >
//       <ScrollView >
//         {videoPaths.map((val, key) => (
//           <TouchableOpacity key={`${key}_v`} style={styles.container} activeOpacity={0.8}
//           // onPress={() => chooseVideo(val)}
//           >
//             <Image key={key} source={{ uri: val }} style={{ width: 100, height: 100 }} />
//           </TouchableOpacity>
//         ))}
//       </ScrollView>
//       <Text>{videoPaths.length}</Text>
//       <Image style={{ width: "1000", height: "1000" }} source={{ uri: "file:///storage/emulated/0/DCIM/CamScanner/Zeugnis itech sia j1_1.jpg" }} />
//       <FlatList
//         data={videoPaths}
//         renderItem={({ uri }) => (
//           <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
//             <Image style={{ width: "100", height: "100" }} source={{ uri: uri }} />
//             {/* <Text>{uri}</Text> */}

//             {/* left off here */}

//           </View>
//         )}
//         //Setting the number of column
//         numColumns={2}
//         keyExtractor={(item, index) => index}
//       />
//     </View>
//     {/* {videoPaths} */}

//     <StatusBar
//       animated={true}
//       backgroundColor="#61dafb"
//       barStyle={"dark-content"}
//     />

//   </View>
// );