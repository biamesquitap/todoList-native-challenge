import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Trash from '../../../assets/Trash.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { defaultThemeColor } from '../../styles/themes/default'
import { useState } from "react";
import { TasksType } from "../../screens/Home";

type Props = {
  task: TasksType
  handleRemoveTask: (id: string) => void //retorno vazio
  handleCompleteTasks: (id: string) => void
}

export function Task({ task, handleRemoveTask, handleCompleteTasks }: Props) {


  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => handleCompleteTasks(task.id)}>
          <Icon
            style={styles.icon}
            name={
              task.checked
                ? 'checkbox-marked-circle'
                : 'checkbox-blank-circle-outline'
            }
            size={36}
            color={
              task.checked
                ? defaultThemeColor['purple-300']
                : defaultThemeColor['blue-500']
            }
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>
        {task.description}
      </Text>


      <TouchableOpacity style={styles.button} onPress={() => handleRemoveTask(task.id)}>
        <Image source={Trash} style={styles.buttonTrash} />
      </TouchableOpacity>

    </View>
  )
}