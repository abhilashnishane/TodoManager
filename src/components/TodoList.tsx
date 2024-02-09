import SingleTodo from './SingleTodo';
import { Todo } from "./ToDoApp";

interface ListProps {
  todoArr: Todo[];
  setTodoArr: (newArr: Todo[]) => void;
  filteredArr: Todo[];
  filterActivated: boolean;
}

function TodoList({ todoArr, setTodoArr, filteredArr, filterActivated }: ListProps) {

  const updateTodos = (element: Todo) => {
    setTodoArr(
      todoArr.map((item) => 
        item.id === element.id
          ? { ...item, isCompleted: !element.isCompleted}
          : item
      )
    );
  }

  const deleteTodo = (element: Todo) => {
    const newArr = todoArr.filter((item) => item.id !== element.id);
    setTodoArr(newArr);
  }

  return (
    <div className='list-container'>
      {
        (filterActivated ? filteredArr : todoArr).map((item) => {
          return (
            <SingleTodo key={item.id} item={item} updateTodos={updateTodos} deleteTodo={deleteTodo} />
          )
        })
      }
    </div>
  )
}

export default TodoList;