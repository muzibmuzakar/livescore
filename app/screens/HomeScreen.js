import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MainHeader from "../components/Home/MainHeader";
import { ScrollView } from "react-native";
import LeagueCarousel from "../components/Home/LeagueCarousel";
import { League, Match, Results } from "../data";
import { sizes, spacing } from "../constants/theme";
import Octicons from "react-native-vector-icons/Octicons";
import LiveCarousel from "../components/Home/LiveCarousel";
import ResultsCard from "../components/Home/ResultsCard";

const Logo = require("../../assets/lapangbola.png");

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* header */}
      <MainHeader logo={Logo} />

      {/* list league */}
      <ScrollView showsVerticalScrollIndicator={false} style={{marginHorizontal: spacing.l}}>
        <LeagueCarousel list={League} />
      </ScrollView>

      {/* part live now */}
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline', paddingHorizontal: spacing.l}}>
          <Text style={{fontSize: sizes.h2, fontWeight: 'bold'}}>Live Now</Text>
          <View style={{flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={{fontSize: 12, marginRight: 5, color: '#3766CF'}}>See all</Text>
            <Octicons name="chevron-right" size={13} color={'#3766CF'} />
          </View>
        </View>
        <LiveCarousel list={Match} />
      </View>

      {/* part Results */}
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'baseline', paddingHorizontal: spacing.l, marginBottom: spacing.l}}>
          <Text style={{fontSize: sizes.h2, fontWeight: 'bold'}}>Results</Text>
          <View style={{flexDirection: 'row', alignItems: 'baseline' }}>
            <Text style={{fontSize: 12, marginRight: 5, color: '#3766CF'}}>See all</Text>
            <Octicons name="chevron-right" size={13} color={'#3766CF'} />
          </View>
        </View>
        <ResultsCard list={Results} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
});
