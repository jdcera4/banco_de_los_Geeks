import React, {useEffect, useState} from 'react';
import './App.css';
import { FloatingLabel, Form, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [articleId, setArticleId] = useState(null);
  let datos = {
    value1: 1,
    value2: 2
  }

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    axios.post('http://localhost:3000', datos)
        .then(response => setArticleId(response));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);

  onsubmit = e => {
    e.onsubmit();
  };

  return (
    <Card style={{ width: '30rem', margin: '50px auto', padding: '20px' }}>
      <form onSubmit={onsubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Enter Number"
          className="mb-3"
        >
          <Form.Control type="number" placeholder="NUmber 1" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Enter Number">
          <Form.Control type="number" placeholder="Number 2" />
        </FloatingLabel>
        <Button style={{marginTop: '10px'}}>Submit</Button>
      </form>
    </Card>
  );
}

export default App;
