import { StyleSheet, View, TouchableHighlight, FlatList, Image } from "react-native";
import React from "react";
import { sizes } from "../../constants/theme";

const LeagueCarousel = ({ list }) => {
  return (
    <FlatList
      data={list}
      horizontal
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableHighlight style={{ marginHorizontal: 5, paddingVertical: 20, }}>
            <View style={styles.card}>
              <View style={styles.imgBox}>
                <Image source={item.image} style={styles.img} />
              </View>
            </View>
          </TouchableHighlight>
        );
      }}
    />
  );
};

export default LeagueCarousel;

const styles = StyleSheet.create({
  card: {
    width: 65,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: sizes.radius,
    // Elevation for Android
    elevation: 1,
  },
  imgBox: {
    width: 65,
    height: 65,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    width: 45,
    height: 45,
    resizeMode: "cover",
  },
});
