import { View, Text, StyleSheet, Pressable } from "react-native";

function TaskItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#b35900" }}
      onPress={props.onDeleteItem.bind(this, props.id)}
    >
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default TaskItem;

//STYLES------------------------------------------------------------------------------------------------------

const styles = StyleSheet.create({
  taskItem: {
    alignItems: "flex-start",
    width: "90%",
    margin: 8,
    marginLeft: 18,
    borderRadius: 9,
    backgroundColor: "#ff9900",
  },
  taskText: {
    color: "#ffffff",
    padding: 10,
    width: "100%",
    fontWeight: "400",
    fontSize: 18,
  },
});
