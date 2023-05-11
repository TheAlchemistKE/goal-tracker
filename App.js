import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredText);
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    console.log(goals);
  };

  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Goal Tracker</Text>

      <GoalInput onAddGoal={addGoalHandler} onInput={inputHandler} text={enteredText}/>

      <View style={styles.goalsContainer}>
        <Text style={styles.small_title}>List of Goals</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 15,
    fontWeight: "bold",
    color: "#333333",
  },
  small_title: {
    fontSize: 18,
    textAlign: "justify",
    margin: 15,
    fontWeight: "bold",
    color: "#333333",
    // paddingTop: 10,
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
    color: "#fff",
  },
});
