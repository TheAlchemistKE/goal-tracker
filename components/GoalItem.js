import React from "react";
import { StyleSheet, View, Text } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{props.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    fontSize: 14,
    backgroundColor: "#5e0acc",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
  },
  goalItemText: {
    fontSize: 14,
    color: "#fff",
  },
});
