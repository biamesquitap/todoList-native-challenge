import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Task } from "../../components/Task";
import { useState } from "react";
import Logo from "../../../assets/Logo.png"
import { v4 as uuidv4 } from 'uuid'

export interface TasksType {
  description: string
  id: string
  checked: boolean
}


export function Home() {
  const [tasks, setTasks] = useState<TasksType[]>([])
  const [taskName, setTaskName] = useState('')
  const [createdTasksNumber, setCreatedTasksNumber] = useState(0)
  const [doneTasksNumber, setDoneTasksNumber] = useState(0)

  function handleAddTask() {
    if (taskName === '') {
      return Alert.alert("Tarefa inválida.", "Digite uma tarefa válida.")
    }

    setTasks((state) => {
      return [...state, { description: taskName, id: uuidv4(), checked: false }]
    })
    setCreatedTasksNumber((state) => state + 1)
    setTaskName('')

  }


  function handleCompleteTasks(id: string) {
    setTasks((state) =>
      state.map((task) => {
        if (task.id === id) {
          if (task.checked) {
            setDoneTasksNumber((state) => state - 1)
          } else {
            setDoneTasksNumber((state) => state + 1)
          }
          return { ...task, checked: !task.checked }
        } else {
          return task
        }
      }),
    )
  }

  function handleRemoveTask(id: string) {
    setDoneTasksNumber((state) => state + 1)
    Alert.alert(
      'Remover',
      `Remover a task ${tasks.find((task) => task.id === id)?.description
      } da lista?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks((state) => {
            return state.filter((task) => task.id !== id)
          })
          setCreatedTasksNumber((state) => state - 1)
          setDoneTasksNumber((state) => state - 1)
          Alert.alert('Deletado!')
        },
      },
      {
        text: 'Não',
        style: 'cancel'
      },
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>

        <Image source={Logo} style={styles.logo} />

        <Text style={styles.eventName}>
          TO DO CASAMENTO Bia & Biel
        </Text>

        <Text style={styles.eventDate}>
          Sexta, 08 de Setembro 2022.
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          onChangeText={setTaskName}
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tasksCountContainer}>
        <View style={styles.tasksCounterView}>
          <Text style={styles.tasksCreated}>
            Criadas
          </Text>

          <Text style={styles.tasksCounter}>
            {createdTasksNumber}
          </Text>
        </View>
        <View style={styles.tasksCounterView}>
          <Text style={styles.tasksCreated}>
            Concluídas

          </Text>
          <Text style={styles.tasksCounter}>
            {doneTasksNumber}
          </Text>
        </View>
      </View>

      <FlatList
        style={styles.flatlistContainer}
        keyExtractor={item => item.id}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            task={item}
            handleRemoveTask={handleRemoveTask}
            handleCompleteTasks={handleCompleteTasks}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Vamos começar os preparativos do casamento?
          </Text>
        )}
      />



    </View>
  );
}
