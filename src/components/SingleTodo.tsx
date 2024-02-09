import { Todo } from "./ToDoApp";

interface SingleProps {
  item: Todo;
  updateTodos: (newArr: Todo) => void;
  deleteTodo: (newArr: Todo) => void;
}

function SingleTodo({ item, updateTodos, deleteTodo }: SingleProps) {

  const checkHandler = (element: Todo) => {
    updateTodos(element);
  }

  const handleDelete = (element: Todo) => {
    deleteTodo(element);
  }

  return (
    <div className='single-item'>
      <div>
        <input
          type="checkbox"
          checked={item.isCompleted}
          onChange={() => checkHandler(item)}
        />
        <span className={`todo-text ${item.isCompleted ? 'strike' : ''}`}>{item.text}</span>
      </div>
      <div className='delete-btn' onClick={() => handleDelete(item)}>x</div>
    </div>
  )
}

export default SingleTodo;