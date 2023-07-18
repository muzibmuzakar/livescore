import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {sizes, spacing} from "../constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import Octicons from "react-native-vector-icons/Octicons";
import { TextInput } from "react-native";
import ResultsCard from "../components/Home/ResultsCard";
import { Results, Schedule } from "../data";
import ScheduleCard from "../components/Schedule/ScheduleCard";

const ScheduleScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    // Lakukan operasi pencarian sesuai kebutuhan
  };
  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, { marginTop: insets.top + 10 }]}>
        <Text style={styles.title}>Match Schedule</Text>
        <View style={styles.search}>
          <Octicons name="search" size={20} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Search"
            value={searchText}
            onChangeText={handleSearch}
          />
        </View>
      </View>
      <ScheduleCard list={Schedule} />
    </ScrollView>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  header: {
    padding: spacing.l,
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    marginBottom: spacing.l,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e7e7e7',
    borderRadius: 15,
    borderWidth:0.15,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    marginRight: 8,
    color: '#888',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
