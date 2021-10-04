import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
// import {Icon} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Todo from './Todo'

export default function App() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([
          {id: 1, text: 'Do homework', isCompleted: false},
          {id: 2, text: 'Wash Car', isCompleted: false},
          {id: 3, text: 'Get stuff', isCompleted: false}
  ])

  const onPress = () => {

      if(input !== ""){
        const todo = {
          id: Math.random(),
          text: input,
          isCompleted: false
        }
  
        setTodos([...todos, todo])
        setInput("")
      }
     
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => {
      if(todo.id === id){
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }
 
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Todo List App</Text>
        <View style={styles.userInput}>
          <TextInput
            style={styles.input}
            onChangeText={setInput}
            value={input}
            placeholder="Enter todo..."
          />
          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
          >
            <Text>Click me</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.list}>
      <FlatList
        data={todos}
        renderItem={({item}) =>  <Todo item={item} index={todos.indexOf(item)} toggleTodo={toggleTodo}/>}
      />
      </View>
      </View>

      
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    height: 40
  },
  input: {
    width: 250,
    borderWidth: 1,
    padding: 7,
    borderColor: "gray"
  },
  userInput: {
    flexDirection: "row",
    height: 40
  },

  list: {
    paddingTop: 25
  },  
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  }
})
