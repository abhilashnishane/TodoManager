import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';
import '../App.css';

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
}

function ToDoApp() {
  const location = useLocation();
  const {pathname} = location;
  const storedTodos: Todo[] = JSON.parse(localStorage.getItem('todos-react') || "[]");
  const [todoArr, setTodoArr] = useState<Todo[]>(storedTodos);
  const [filterActivated, setFilterActivated] = useState(false);
  const [filteredArr, setFilteredArr] = useState<Todo[]>([]);
  const [activeItems, setActiveItems] = useState(storedTodos.length);

  useEffect(() => {
    setActiveItems(todoArr.filter((item) => item.isCompleted === false).length);
    localStorage.setItem('todos-react', JSON.stringify(todoArr));
    if (location.pathname === '/') {
      setFilterActivated(false);
    } else if (location.pathname === '/active') {
      const filtered = todoArr.filter((item) => item.isCompleted === false);
      setFilteredArr(filtered);
      setFilterActivated(true);
    } else if (location.pathname === '/completed') {
      const filtered = todoArr.filter((item) => item.isCompleted === true);
      setFilteredArr(filtered);
      setFilterActivated(true);
    }
  }, [pathname, todoArr]);

  const addNewTodo = (newTodo: Todo) => {
    setTodoArr([...todoArr, newTodo]);
  }

  const clearCompleted = () => {
    const newArr = todoArr.filter((item) => item.isCompleted === false);
    setTodoArr(newArr);
  }

  const markAllTodos = () => {
    const newArr = todoArr.map((item) => {
      if (activeItems === 0) {
        return {...item, isCompleted: false}
      }
      return {...item, isCompleted: true}
    });
    setTodoArr(newArr);
  }

  return (
    <div className='main-container'>
      <Header addNewTodo={addNewTodo} markAllTodos={markAllTodos} />
      <TodoList todoArr={todoArr} setTodoArr={setTodoArr} filteredArr={filteredArr} filterActivated={filterActivated} />      
      {
        todoArr.length !== 0
        ?
        <Footer activeItems={activeItems} clearCompleted={clearCompleted} />
        :
        null
      }
    </div>
  );
}

export default ToDoApp;
