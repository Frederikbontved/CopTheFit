import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ActionBar() {
  return (
    <View style={styles.bar}>
      <View style={styles.left}>
        <Feather name="heart" size={24} color="#3a3a3a" style={styles.like} />
        <Feather name="share" size={24} color="#3a3a3a" />
      </View>
      <View style={styles.right}>
        <Feather name="bookmark" size={24} color="#3a3a3a" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  left: {
    flexDirection: "row",
  },
  like: {
    marginRight: 16,
  },
});
