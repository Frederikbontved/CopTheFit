import { useRef } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Tooltip from "rn-tooltip";
import { Entypo } from "@expo/vector-icons";

export default function Tag({ top, left, openExplorer }) {
  const tooltipRef = useRef(null);

  const closeTooltip = () => {
    tooltipRef.current.toggleTooltip();
    openExplorer();
  };

  return (
    <View style={[styles.tag, { top: top, left: left }]}>
      <Tooltip
        ref={tooltipRef}
        backgroundColor="white"
        width={160}
        height={50}
        withOverlay={false}
        containerStyle={styles.tooltip}
        popover={
          <TouchableOpacity
            style={styles.popTag}
            onPress={() => {
              closeTooltip();
            }}
          >
            <View style={styles.left}>
              <Text style={styles.brand}>Nike</Text>
              <Text style={styles.name}>Liverpool trøje</Text>
            </View>
            <View style={styles.right}>
              <Entypo
                style={styles.chevron}
                name="chevron-thin-right"
                size={24}
                color="#3a3a3a"
              />
            </View>
          </TouchableOpacity>
        }
      >
        <View style={[styles.circle]} />
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    position: "absolute",
  },
  circle: {
    width: 24,
    height: 24,
    backgroundColor: "#ececec",
    borderRadius: 12,
    position: "absolute",
    top: -12,
    left: -12,
  },
  tooltip: {
    borderRadius: 5,
  },
  popTag: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    width: 160,
  },
  left: {
    marginLeft: 8,
  },
  brand: {
    fontSize: 14,
    fontWeight: "500",
  },
  name: {
    fontSize: 14,
  },
  right: {
    height: 30,
    paddingHorizontal: 4,
    justifyContent: "center",
    borderLeftWidth: 1,
    borderLeftColor: "#ececec",
  },
});
