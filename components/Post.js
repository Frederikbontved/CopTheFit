import { StyleSheet, View } from "react-native";
import Byline from "./Byline";
import Outfit from "./Outfit";
import ActionBar from "./ActionBar";

export default function Post() {
  return (
    <View style={styles.post}>
      <Byline />
      <Outfit />
      <ActionBar />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
  },
});
