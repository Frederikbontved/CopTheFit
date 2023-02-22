import { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Piece from "./Piece";
import { Feather } from "@expo/vector-icons";

const ALTERNATIVES = [1, 2];

export default function PieceSlider({ width }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onScroll = (event) => {
    const totalWidth = event.nativeEvent.layoutMeasurement.width;
    const xPos = event.nativeEvent.contentOffset.x;
    const current = Math.floor(xPos / totalWidth);
    setCurrentIndex(current);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={ALTERNATIVES}
        keyExtractor={(_, index) => index}
        renderItem={() => (
          <View>
            <View style={styles.type}>
              <Text style={styles.pieceType}>Actual hoodie</Text>
              <Feather name="info" size={16} color="white" />
            </View>
            <View style={[styles.piece, { width: width - 32 }]}>
              <Piece />
            </View>
          </View>
        )}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        onScroll={onScroll}
        bounces={false}
      />
      <View style={styles.pagination}>
        {ALTERNATIVES.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                currentIndex === index ? styles.dotActive : {},
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  type: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pieceType: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    marginRight: 8,
  },
  piece: {
    margin: 16,
    borderRadius: 5,
    backgroundColor: "white",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  dotActive: {
    width: 16,
    height: 16,
    backgroundColor: "white",
  },
});
