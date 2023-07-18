import {
  StyleSheet,
  View,
  TouchableHighlight,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { shadow, sizes, spacing } from "../../constants/theme";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const CARD_WIDTH_SPACING = CARD_WIDTH + spacing.l;

const LiveCarousel = ({ list }) => {
  const navigate = useNavigation();

  const handleMatchPress = (list) => {
    // Navigasi ke rute detail match dengan mengirimkan ID atau data lain yang diperlukan
    navigate.navigate("detail-match", { matchId: list.id });
  };
  return (
    <FlatList
      data={list}
      horizontal
      snapToInterval={CARD_WIDTH_SPACING}
      decelerationRate="fast"
      showsHorizontalScrollIndicator={false}
      keyExtractor={(i) => i.id}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            style={{
              marginLeft: spacing.l,
              marginRight: index === list.length - 1 ? spacing.l : 0,
              paddingVertical: 10,
            }}
            onPress={() => handleMatchPress(item)}
          >
            <View style={[styles.card, shadow.dark]}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image source={item.league} style={{ width:35, height:35, resizeMode:"contain" }} />
                <Text style={{ fontSize: sizes.h2, fontWeight: 'bold', color: '#274893' }}>67 '</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                <View style={{width: '35%', alignItems: 'center'}}>
                    <Image source={item.homeLogo} style={{ width:60, height:60, resizeMode:"contain" }} />
                    
                </View>
                <View style={{width: '30%', alignItems: 'center'}}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#274893' }}>{item.scoreHome} - {item.scoreAway}</Text>
                </View>
                <View style={{width: '35%', alignItems: 'center'}}>
                    <Image source={item.awayLogo} style={{ width:60, height:60, resizeMode:"contain" }} />
                    
                </View>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Text style={{ fontSize: 18, textAlign: 'center', width: '35%' }}>{item.home}</Text>
              <Text style={{ fontSize: 18, textAlign: 'center', width: '35%' }}>{item.away}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default LiveCarousel;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    padding: 20,
    borderRadius: sizes.radius,
  },
  imgBox: {
  },
  img: {
  },
});
