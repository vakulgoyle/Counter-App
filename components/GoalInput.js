import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState("");
  // console.log(props);
  // console.log("test");
  console.log(props.onCancel());
  // const goalInputHandler = enteredText => {
  //   setEnteredGoal(enteredText);
  // };

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder=" Course Goals"
          style={styles.input}
          onChangeText={enteredText => setEnteredGoal(enteredText)}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="CANCEL" onPress={props.onCancel} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default GoalInput;
