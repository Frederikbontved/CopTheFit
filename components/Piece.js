import { StyleSheet, Text, View } from "react-native";
import PieceHeader from "./PieceHeader";
import PieceImage from "./PieceImage";
import BuyButton from "./BuyButton";

export default function Piece({ piece }) {
  return (
    <View style={styles.piece}>
      <PieceHeader brand={piece.brand} name={piece.name} />
      <PieceImage imgSrc={piece.imgSrc} />
      <BuyButton />
    </View>
  );
}

const styles = StyleSheet.create({
  piece: {},
});
