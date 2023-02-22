import { StyleSheet, View } from "react-native";
import Byline from "./Byline";
import Outfit from "./Outfit";
import ActionBar from "./ActionBar";

export default function Post({ outfit }) {
  return (
    <View style={styles.post}>
      <Byline
        avatarSrc={outfit.avatarSrc}
        name={outfit.name}
        date={outfit.date}
      />
      <Outfit imgSrc={outfit.imgSrc} pieces={outfit.pieces} />
      <ActionBar />
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    flex: 1,
  },
});
