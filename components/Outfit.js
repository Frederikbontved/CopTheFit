import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import Tag from "./Tag";
import OutfitExplorer from "./OutfitExplorer";

export default function Outfit({ imgSrc, pieces }) {
  const [explorerOpen, setExplorerOpen] = useState(false);

  const openExplorer = () => {
    setExplorerOpen(true);
  };

  const closeExplorer = () => {
    setExplorerOpen(false);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imgSrc} />
      {pieces.map((piece, index) => {
        return (
          <Tag
            key={index}
            top={piece[0].placement.top}
            left={piece[0].placement.left}
            brand={piece[0].brand}
            name={piece[0].name}
            openExplorer={openExplorer}
          />
        );
      })}
      <OutfitExplorer
        pieces={pieces}
        explorerOpen={explorerOpen}
        closeExplorer={closeExplorer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green",
  },
  image: {
    width: "100%",
    height: 500,
    backgroundColor: "#ccc",
  },
});
