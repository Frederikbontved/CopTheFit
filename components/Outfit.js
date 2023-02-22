import { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import Tag from "./Tag";
import OutfitExplorer from "./OutfitExplorer";

export default function Outfit() {
  const [explorerOpen, setExplorerOpen] = useState(false);

  const openExplorer = () => {
    setExplorerOpen(true);
  };

  const closeExplorer = () => {
    setExplorerOpen(false);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} />
      <Tag top="50%" left="50%" openExplorer={openExplorer} />
      <Tag top="20%" left="34%" openExplorer={openExplorer} />
      <OutfitExplorer
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
