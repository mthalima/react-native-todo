import { useState } from "react";
import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Keyboard,
  Modal,
  Image,
} from "react-native";

function TaskInput(props) {
  const [enteredText, setEnteredText] = useState("");

  function taskInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addTaskHandler() {
    if (enteredText === "") alert("Type something!");
    else {
      props.onAddTask(enteredText);
      setEnteredText("");
    }
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        ></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Add Task.."
          placeholderTextColor={"#cc99ff"}
          onChangeText={taskInputHandler}
          value={enteredText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color={"#e67300"}
              onPress={props.onCancel}
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Add"
              color={"#ff9900"}
              onPress={() => {
                addTaskHandler();
                Keyboard.dismiss();
              }}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}

//STYLE---------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 70,
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: "5%",
    alignItems: "center",
    backgroundColor: "#6600cc",
  },
  textInput: {
    width: "90%",
    padding: 8,
    color: "#6600ff",
    borderRadius: 8,
    backgroundColor: "#fff2e6",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button: {
    width: "30%",
    marginHorizontal: 8,
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default TaskInput;
