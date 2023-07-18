import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, spacing } from "../../constants/theme";
import { Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";

const ResultsCard = ({ list }) => {
  const results = list;
  return (
    <View>
      {results.map((result) => {
        return (
          <View style={styles.card} key={result.id}>
            <View style={styles.cardHeader}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 15,
                  alignItems: "center",
                }}
              >
                <Image
                  source={result.league.image}
                  style={{ width: 35, height: 35, marginRight: 10 }}
                />
                <View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginBottom: 5,
                    }}
                  >
                    {result.league.title}
                  </Text>
                  <Text style={{ fontSize: 12, color: colors.gray }}>
                    {result.league.from}
                  </Text>
                </View>
              </View>
              <View style={{ justifyContent: "center", paddingHorizontal: 20 }}>
                <Octicons name="chevron-right" size={20} />
              </View>
            </View>
            {result.match.map((item) => {
              return (
                <View style={styles.cardMatch} key={item.id}>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 10,
                      }}
                    >
                      <Image
                        source={item.homeLogo}
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: 10,
                          resizeMode: "contain",
                        }}
                      />
                      <Text>{item.home}</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={item.awayLogo}
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: 10,
                          resizeMode: "contain",
                        }}
                      />
                      <Text>{item.away}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ marginRight: 20 }}>FT</Text>
                    <View>
                      <Text style={{ marginBottom: 10 }}>{item.scoreHome}</Text>
                      <Text>{item.scoreAway}</Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </View>
        );
      })}
    </View>
  );
};

export default ResultsCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.l,
    marginBottom: 10,
    borderWidth: 0.15,
    borderColor: colors.gray,
    borderRadius: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 0.15,
    borderColor: colors.gray,
    borderRadius: 2,
  },
  cardMatch: {
    padding: 15,
    borderBottomWidth: 0.15,
    borderColor: colors.gray,
    borderRadius: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
