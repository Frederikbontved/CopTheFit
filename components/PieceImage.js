import { StyleSheet, Image, View } from "react-native";

export default function PieceImage({ imgSrc }) {
  return <Image style={styles.image} source={imgSrc} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
    resizeMode: "contain",
    borderTopWidth: 1,
    borderTopColor: "#ececec",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
  },
});
