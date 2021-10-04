import React from 'react';
import { StyleSheet, Text, View, CheckBox} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

const Todo = ({item, index, toggleTodo}) => {

    return (
        <View style={[styles.todo], [styles.todo, {backgroundColor: index % 2 == 0  ? "#f2f2f2" : "#FFFFFF"}]}>
            <Text style={styles.text}>{item.text}</Text>
            {/* <Icon style={styles.icon} name="check"color="green" onPress={onPress}/> */}
            <CheckBox style={styles.icon}
                value={item.isCompleted}
                onValueChange={() => toggleTodo(item.id)}
            />
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

    icon: {
        fontSize: 20,
        alignSelf: "center",
        paddingRight: 10
    }
})
export default Todo
