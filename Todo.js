import React from 'react';
import { StyleSheet, Text, View, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Todo = ({item, index, toggleTodo, deleteTodo}) => {

    return (
        <View style={[styles.todo], [styles.todo, {backgroundColor: index % 2 == 0  ? "#f2f2f2" : "#FFFFFF"}]}>
            <CheckBox style={styles.checkbox}
                value={item.isCompleted}
                onValueChange={() => toggleTodo(item.id)}
            />
            <Text style={[styles.text], [styles.text, item.isCompleted ? {textDecorationLine: "line-through"} : {}]}>{item.text}</Text>
            <Icon style={styles.delete} name="trash" color="red" onPress={() => deleteTodo(item.id)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    todo: {
        width: 325,
        flexDirection: "row",
        alignSelf: "stretch",
        justifyContent: "space-between",
    },

    text: {
        padding: 10,
        fontSize: 18,
        height: 44,
        width: 200,
    },

    checkbox: {
        alignSelf: "center"
    },

    delete: {
        fontSize: 22,
        alignSelf: "center",
        paddingRight: 10
    }
})
export default Todo
