import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors, spacing } from "../../constants/theme";
import { Image } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import moment from 'moment';

const ScheduleCard = ({ list }) => {
  const Schedule = list;
  return (
    <View>
      {Schedule.map((schedule) => {
        return (
          <View style={styles.card} key={schedule.id}>
            <View style={styles.cardHeader}>
              <View
                style={{
                  flexDirection: "row",
                  padding: 15,
                  alignItems: "center",
                }}
              >
                <Image
                  source={schedule.league.image}
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
                    {schedule.league.title}
                  </Text>
                  <Text style={{ fontSize: 12, color: colors.gray }}>
                    {schedule.league.from}
                  </Text>
                </View>
              </View>
              <View style={{ justifyContent: "center", paddingHorizontal: 20 }}>
                <Octicons name="chevron-right" size={20} />
              </View>
            </View>
            {schedule.match.map((item) => {
              const date = moment(item.date).format('DD MMM');
              const hour = moment(item.date).format('HH:mm');
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
                        source={item.home.logo}
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: 10,
                          resizeMode: "contain",
                        }}
                      />
                      <Text>{item.home.name}</Text>
                    </View>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={item.away.logo}
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: 10,
                          resizeMode: "contain",
                        }}
                      />
                      <Text>{item.away.name}</Text>
                    </View>
                  </View>
                  <View>
                    <Text style={{ marginBottom: 5,color: colors.gray, fontSize: 12 }}>{date}</Text>
                    <Text style={{ color: colors.gray, fontSize: 12 }}>{hour}</Text>
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

export default ScheduleCard;

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
