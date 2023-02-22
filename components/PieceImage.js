import { StyleSheet, Text, View } from "react-native";

export default function PieceImage() {
  return <View style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    backgroundColor: "#ececec",
    aspectRatio: 1,
  },
});
