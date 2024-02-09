import InputText from "./InputText";
import { Todo } from "./ToDoApp";

interface TodoProps {
  addNewTodo: (newTodo: Todo) => void;
  markAllTodos: () => void;
}

function Header({ addNewTodo, markAllTodos }: TodoProps) {
  const markAll = () => {
    markAllTodos();
  }

  const getNewTodo = (newTodo: Todo) => {
    addNewTodo(newTodo);
  }

  return (
    <div>
      <h1 className='heading'>todos</h1>
      <div className='input-container'>
        <span className='mark-all' onClick={markAll}>&nbsp;_&nbsp;</span>
        <InputText getNewTodo={getNewTodo} />
      </div>
    </div>
  )
}

export default Header;