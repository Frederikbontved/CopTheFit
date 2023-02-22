import { StyleSheet, Text, View } from "react-native";
import PieceHeader from "./PieceHeader";
import PieceImage from "./PieceImage";
import BuyButton from "./BuyButton";

export default function Piece() {
  return (
    <View style={styles.piece}>
      <PieceHeader />
      <PieceImage />
      <BuyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  piece: {},
});
