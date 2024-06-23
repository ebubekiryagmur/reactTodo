import { useState } from 'react'
import styled from 'styled-components';
import { Form, Button,} from 'react-bootstrap';
import "./App.css";



const Label = styled(Form.Label)`
  font-weight: bold;
  
`;
const ListItem = styled.li`
  cursor:pointer;
`



function App() {

  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const InputChange = (e) => {
    setTodoInput(e.target.value);
  };


  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };



  return (
    <div>
      <Form>
   
        <Form.Group controlId="formTarget">
          <Label>TodoList</Label>
       
          <Form.Control 
            type="text" 
            placeholder="Hedefinizi girin" 
            value={todoInput}  
            onChange={InputChange}  
          />
        </Form.Group>
  
        <Button variant="primary" onClick={addTodo} className="mt-4">
          Ekle
        </Button>
      </Form>

      <ul>
         
        {todos.map((todo, index) => (
       
          <ListItem key={index}>
            {todo}
          </ListItem>
        ))}
      </ul>
   
    </div>
  );
}

export default App;


