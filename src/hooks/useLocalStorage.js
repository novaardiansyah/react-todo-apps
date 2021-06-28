import { useState, useEffect } from 'react'

const PREFIX = 'react-todo-apps-'

function getSavedValue({ key, initialValue }) {
  if (initialValue instanceof Function) return initialValue()

  const savedValue = JSON.parse(localStorage.getItem(key))

  if (savedValue) return savedValue

  return initialValue
}

export function useLocalStorage({ key, initialValue }) {
  const prefixKey = PREFIX + key

  const [value, setValue] = useState(() => {
    return getSavedValue({ key: prefixKey, initialValue })
  })

  useEffect(() => {
    localStorage.setItem(prefixKey, JSON.stringify(value))
  }, [prefixKey, value])

  return [value, setValue]
}
