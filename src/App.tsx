import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ToDoApp from './components/ToDoApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ToDoApp />} />
        <Route path="/active" element={<ToDoApp />} />
        <Route path="/completed" element={<ToDoApp />} />
      </Routes>
    </Router>
  );
}

export default App;
