import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { colors } from "../../constants/theme";
import { TouchableOpacity } from "react-native";

const MainHeader = ({ logo }) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { marginTop: insets.top + 10 }]}>
      <Image source={logo} style={styles.logo} />
      <TouchableOpacity>
        <Octicons name="bell" size={20} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 155,
    height: 60,
  },
});
