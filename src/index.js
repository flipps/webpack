import './main.scss'
import { addTask } from './addTask'

const addTaskButton = document.getElementById('addTask')
addTaskButton.addEventListener('click', addTask)
