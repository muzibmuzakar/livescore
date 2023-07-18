import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Octicons from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors, sizes, spacing } from "../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "react-native";
import { Match, statsData } from "../data";
import { useNavigation } from "@react-navigation/native";
import Stats from "../components/DetailMatch/Stats";

const goal = "football";
const card = "square";

const DetailMatch = ({ route }) => {
  const insets = useSafeAreaInsets();
  const navigate = useNavigation();
  const { matchId } = route.params;
  const match = Match.find((item) => item.id === matchId);

  const handleGoBack = () => {
    navigate.goBack();
  };

  const [activeMenu, setActiveMenu] = useState("summary");

  const handleMenuPress = (menu) => {
    setActiveMenu(menu);
  };

  const renderContent = () => {
    switch (activeMenu) {
      case "summary":
        return <Text>Summary</Text>;
      case "stats":
        return <Stats match={match} stats={statsData} />;
      case "lineup":
        return <Text>Lineup</Text>;
      case "topStats":
        return <Text>Top Stats</Text>;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={[styles.nav, { marginTop: insets.top + 10 }]}>
        <TouchableOpacity style={{ paddingVertical: 5 }} onPress={handleGoBack}>
          <Octicons name="chevron-left" size={25} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        {/* logo and score */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <View style={styles.home}>
            <Image source={match.homeLogo} style={styles.logo} />
          </View>
          <View style={styles.score}>
            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#3766CF" }}
            >
              {match.scoreHome} - {match.scoreAway}
            </Text>
          </View>
          <View style={styles.away}>
            <Image source={match.awayLogo} style={styles.logo} />
          </View>
        </View>
        {/* name and time */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={styles.home}>
            <Text style={{ fontSize: 18 }}>{match.home}</Text>
            <Text style={{ color: colors.gray }}>home</Text>
          </View>
          <View style={styles.score}>
            <Text
              style={{
                fontSize: sizes.h3,
                fontWeight: "600",
                color: "#3766CF",
              }}
            >
              68'
            </Text>
          </View>
          <View style={styles.away}>
            <Text style={{ fontSize: 18 }}>{match.away}</Text>
            <Text style={{ color: colors.gray }}>away</Text>
          </View>
        </View>
        {/* scorename */}
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ width: "50%", paddingRight: 20 }}>
            {/* goal */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gray, marginRight: 5 }}>
                L. Messi 78'
              </Text>
              <Ionicons name={goal} size={20} color="#616161" />
            </View>
            {/* card */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={{ color: colors.gray, marginRight: 5 }}>
                L. Messi 78'
              </Text>
              <Ionicons name={card} size={20} color="#F0DC28" />
            </View>
          </View>
          <View style={{ width: "50%", paddingLeft: 20 }}>
            {/* goal */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Ionicons name={goal} size={20} color="#616161" />
              <Text style={{ color: colors.gray, marginLeft: 5 }}>
                C. Ronaldo (P) 56'
              </Text>
            </View>
            {/* card */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Ionicons name={card} size={20} color="#F0DC28" />
              <Text style={{ color: colors.gray, marginLeft: 5 }}>
                C. Ronaldo (P) 56'
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* menu */}
      <View style={styles.menu}>
        <TouchableOpacity
          onPress={() => handleMenuPress("summary")}
          style={[
            styles.menuItem,
            activeMenu === "summary" && styles.activeMenuItem,
            {marginRight: 15}
          ]}
        >
          <Text
            style={[
              styles.menuText,
              activeMenu === "summary" && styles.activeMenuText,
            ]}
          >
            Match
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMenuPress("stats")}
          style={[
            styles.menuItem,
            activeMenu === "stats" && styles.activeMenuItem,
            {marginRight: 15}
          ]}
        >
          <Text
            style={[
              styles.menuText,
              activeMenu === "stats" && styles.activeMenuText,
            ]}
          >
            Stats
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMenuPress("lineup")}
          style={[
            styles.menuItem,
            activeMenu === "lineup" && styles.activeMenuItem,
            {marginRight: 15}
          ]}
        >
          <Text
            style={[
              styles.menuText,
              activeMenu === "lineup" && styles.activeMenuText,
            ]}
          >
            Lineup
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMenuPress("topStats")}
          style={[
            styles.menuItem,
            activeMenu === "topStats" && styles.activeMenuItem,
          ]}
        >
          <Text
            style={[
              styles.menuText,
              activeMenu === "topStats" && styles.activeMenuText,
            ]}
          >
            Top Stats
          </Text>
        </TouchableOpacity>
      </View>

      {/* content component */}
      <View style={styles.content}>{renderContent()}</View>
    </View>
  );
};

export default DetailMatch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  nav: {
    marginHorizontal: spacing.l,
  },
  header: {
    padding: spacing.l,
  },
  home: {
    width: "35%",
    alignItems: "center",
  },
  away: {
    width: "35%",
    alignItems: "center",
  },
  score: {
    width: "30%",
    alignItems: "center",
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: spacing.l,
  },
  menuItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  menuText: {
    fontSize: sizes.h3,
    color: colors.gray,
  },
  activeMenuItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#3766CF",
  },
  activeMenuText: {
    color: "#3766CF",
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: spacing.l,
  },
});
