import Todo from './Todo';
import { useState, useRef } from 'react';

export default function TodoContainer({ key = 0 }) {
  // const { getTodos, updateTodos } = useContext(TodoContext);
  const [todos, setTodos] = useState(null);
  const newTodoRef = useRef(null);
  // useEffect(() => {
  //   setTodos(getTodos(key));
  // });

  function createTodo(event) {
    event.preventDefault();

    const newTodoId = `todo-${Date.now()}`;
    let todo = {
      label: newTodoRef.current.value,
      status: false,
      id: newTodoId,
    };
    console.log({ todo });
    setTodos((prevTodos) => [...(prevTodos || []), todo]);
    console.log({ todos });
  }

  function updateTodo(event) {
    event.preventDefault();
    console.log('event.target => ', event.target);
    // todos.find((todo) => todo.id === event.target.id);
  }

  return (
    <form
    // onChange={(event) => updateTodo(event)}
    // onSubmit={(event) => createTodo(event)}
    >
      <div className="row" style={{ marginBottom: '2em' }}>
        <label htmlFor="newTodo">New TODO</label>
        <div className="row">
          <input name="newTodo" ref={newTodoRef} type="text"></input>
          <button onClick={(event) => createTodo(event)} type="submit">
            Create Todo
          </button>
        </div>
      </div>
      <div className="row" style={{ marginBottom: '2em' }}>
        {todos &&
          todos.map(({ label, status, id }) => (
            <Todo
              key={id}
              id={id}
              label={label}
              updateTodo={updateTodo}
              status={status}
            />
          ))}
        {/* <Todo label={'testing'} updateTodo={updateTodo} status={false} /> */}
      </div>
    </form>
  );
}
