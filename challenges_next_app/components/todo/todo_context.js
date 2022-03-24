import { createContext, useState } from 'react';

const TodoContext = createContext();
/** TODOS contain:
 *  label: string
 *  Status: true/ false
 *  id
 */
export default function SettingsContextProvider({ children }) {
  const [todos, setTodos] = useState(null);

  function updateTodos(todoObj) {
    const key = Object.keys(todoObj)[0];
    const todoArr = Array.from(todoObj[key]);

    setTodos(Object.assign({}, { [key]: todoArr }));
  }
  function getTodos(key) {
    return [...todos[key]] || 'No Todo for this subject yet';
  }

  return (
    <TodoContext.Provider value={{ getTodos, updateTodos }}>
      {children}
    </TodoContext.Provider>
  );
}
