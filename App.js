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

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);

  const inputHandler = (enteredText) => {
    setEnteredText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredText);
    setGoals((currentGoals) => [...currentGoals, {text: enteredText, id: Math.random().toString()}]);
    console.log(goals);
  };
  return (
    <View style={styles.appContainer}>
      <Text style={styles.title}>Goal Tracker</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal"
          style={styles.textInput}
          onChangeText={inputHandler}
          value={enteredText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <Text style={styles.small_title}>List of Goals</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalItemText}>{itemData.item.text}</Text>
              </View>
            );
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
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 15,
    margin: 15,
    fontSize: 20,
    width: "70%",
  },
  goalsContainer: {
    flex: 4,
    color: "#fff",
  },
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
