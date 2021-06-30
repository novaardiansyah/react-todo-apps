import React, { useContext, useRef, useState, useEffect } from 'react'
// hooks
import { useLocalStorage } from '../hooks/useLocalStorage'
// firebase
import firebase from 'firebase'
import { cloudFirestore } from '../firebase/firebaseConfig'

const TodosContext = React.createContext()

export function TodosProvider({ children }) {
  // state
  const [todos, setTodos] = useState([])
  const [toggleActions, setToggleActions] = useLocalStorage({
    key: 'toggleActions',
    initialValue: false,
  })
  const [disableBtn, setDisableBtn] = useState(true)

  // ref
  const todoRef = useRef('')

  // effect
  useEffect(() => {
    // request data to firebase
    cloudFirestore
      .collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              title: doc.data().title,
              complete: doc.data().complete,
              timestamp: doc.data().timestamp,
            }
          })
        )
      })
  }, [])

  // method
  const CreateTodos = (e) => {
    e.preventDefault()

    // create a new data in firebase
    cloudFirestore.collection('todos').add({
      title: todoRef.current.value,
      complete: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    todoRef.current.value = ''
    setDisableBtn(true)
  }

  const DeleteTodos = ({ id }) => {
    console.log('successfully deleted data', id)
    return cloudFirestore.collection('todos').doc(id).delete()
  }

  const UpdateTodos = ({ id, title, complete }) => {
    console.log('successfully update data')
    
    if (complete === undefined || complete === null) {
      return cloudFirestore.collection('todos').doc(id).set(
        {
          title,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      )
    }
    
    return cloudFirestore.collection('todos').doc(id).set({
      complete
    }, { merge: true })
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
