import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList, Button } from "react-native";
import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [modalIsVisible, setModalisVisible] = useState(false);

  function startAddTaskHandler() {
    setModalisVisible(true);
  }

  function endAddTaskHandler() {
    setModalisVisible(false);
  }

  function addTaskHandler(enteredText) {
    setTaskList((currentTaskList) => [
      ...currentTaskList,
      {
        text: enteredText,
        id: Math.random().toString(),
      },
    ]);
    endAddTaskHandler();
  }

  function deleteTaskHandler(id) {
    setTaskList((currentTaskList) => {
      return currentTaskList.filter((task) => task.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={style.appContainer}>
        <Text style={style.titleText}>TODO</Text>
        <Button
          title="ADD NEW TASK"
          color={"#ffa31a"}
          onPress={startAddTaskHandler}
        ></Button>
        {modalIsVisible && (
          <TaskInput
            visible={modalIsVisible}
            onAddTask={addTaskHandler}
            onCancel={endAddTaskHandler}
          ></TaskInput>
        )}
        <View style={style.tasksContainer}>
          <FlatList
            data={taskList}
            renderItem={(itemData) => {
              return (
                <TaskItem
                  text={itemData.item.text}
                  onDeleteItem={deleteTaskHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={true}
          />
        </View>
      </View>
    </>
  );
}

//STYLES------------------------------------------------------------------------------------------------------

const style = StyleSheet.create({
  appContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: "#6600cc",
    alignItems: "center",
    flex: 1,
  },

  titleText: {
    marginTop: "15%",
    marginBottom: 32,
    textAlign: "center",
    fontSize: 62,
    color: "#ff9900",
    fontWeight: "900",
    fontStyle: "italic",
  },

  tasksContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    marginTop: 20,
    backgroundColor: "#8000ff",
    paddingTop: 20,
    borderTopWidth: 3,
    borderColor: "#ffa31a",
  },
});
