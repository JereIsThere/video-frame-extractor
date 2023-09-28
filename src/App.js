import React from 'react';
import VideoScreen from './video_screen/video_screen';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Public Sign In Screen</Text>
      <VideoScreen/>
    </View>
  );
};

export default App;

{/* <VideoScreen></VideoScreen> */ }