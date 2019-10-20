import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  // isAddMode = false
  // setIsAddMode = (bool) => {
  //  isAddMode = bool
  //  }
  // isAddMode = true
  // courseGoals = []

  // Unique key for every item //
  // Flatlist gives better performance //

  const addGoalHandler = goalTitle => {
    console.log(goalTitle);
    setCourseGoals(courseGoals => [
      ...courseGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalID => {
    setCourseGoals(courseGoals => {
      return courseGoals.filter(goal => goal.id !== goalID);
    });
  };

  const cancelGoalAdditionHandler = () => {
    // console.log("hjdhdh");
    // console.log("cancecl clicked");
    setIsAddMode(false);
  };

  // onPress -> setIsAddMode(true)
  // onPress() === setIsAddMode(true)()
  // {() => console.log('Hello')}
  //

  // function hello(text){
  //   console.log(text)
  // }

  // setIsAddMode = function hello(text){
  //   console.log(text)
  // }

  // //Print value
  // hello("kartikay") -> kartikay  //wrong
  // setIsAddMode - undefined //WRONG -> function hello(text){
  // //   console.log(text)
  // // }
  // setIsAddMode("kartikay") -kartikay
  // onPress = {() => setIsAddMode("kartikay")}
  // onPress = function (){
  //     setIsAddMode(text)
  // }();
  // onPress() -> kartikay

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        data={courseGoals} //courseGaols = [{id: value}, {id, value}]
        keyExtractor={item => item.id}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
