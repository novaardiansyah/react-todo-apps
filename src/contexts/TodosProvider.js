import React, { useContext } from 'react'

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
  
  // method
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
    DeleteTodos,
    UpdateTodos,
  }

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}

export function useTodos() {
  return useContext(TodosContext)
}
