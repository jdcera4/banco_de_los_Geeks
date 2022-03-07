import React, {useState} from 'react';
import './App.css';
import { FloatingLabel, Form, Card, Button, Alert } from 'react-bootstrap';

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);
  const [fibonacci, setFibonacci] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
        await fetch("http://localhost:3000/", {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body: JSON.stringify({
               value1: value1,
               value2: value2, 
           }),
       }).then(response => response.json()).then(data => {
         setFibonacci(data.fibonacci);
         setResult(data.result);
       });
      //  window.location = "/";
    } catch (err) {
       console.error(err.message);
    }
  };

  return (
    <Card style={{ width: '30rem', margin: '50px auto', padding: '20px' }}>
      <Alert><p>Result:{result}</p><p>it's in fibonacci secuence: {fibonacci ? 'si' : 'no'}</p></Alert>
      <form onSubmit={onSubmitForm}>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Number"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="Number 1" name="value1" value={value1} onChange={e => setValue1(e.target.value)}/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Enter Number">
          <Form.Control type="number" placeholder="Number 2" name="value2" value={value2} onChange={e => setValue2(e.target.value)}/>
        </FloatingLabel>
        <Button style={{marginTop: '10px'}} type='submit'>Submit</Button>
      </form>
    </Card>
  );
}

export default App;
