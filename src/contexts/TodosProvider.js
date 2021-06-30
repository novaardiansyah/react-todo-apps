import React, { useContext, useRef, useState } from 'react'

// hooks
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodosContext = React.createContext()

export function TodosProvider({ children }) {
  // state
  const [todos, setTodos] = useLocalStorage({ key: 'todos', initialValue: [] })
  const [toggleActions, setToggleActions] = useLocalStorage({
    key: 'toggleActions',
    initialValue: false,
  })
  const [disableBtn, setDisableBtn] = useState(false)
  
  // ref
  const todoRef = useRef('')
  
  // method
  const CreateTodos = (e) => {
    e.preventDefault()

    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: todoRef.current.value,
        timestamp: Date.now(),
        complete: false,
      },
    ])

    todoRef.current.value = ''
    setDisableBtn(true)
  }
  
  const DeleteTodos = ({ id }) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id)
    })

    console.log('successfully deleted data', id)
  }

  const UpdateTodos = ({ id, title }) => {
    console.log('successfully update data')
  }

  const value = {
    todos,
    setTodos,
    toggleActions,
    setToggleActions,
    todoRef,
    disableBtn,
    setDisableBtn,
    DeleteTodos,
    UpdateTodos,
    CreateTodos,
  }

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export function useTodos() {
  return useContext(TodosContext)
}
