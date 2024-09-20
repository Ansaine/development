import express from 'express';
import axios from 'axios'; // For async request
import request from 'sync-request'; // For sync request
const app = express();

// Synchronous route (simulated using sync-request)
app.get('/helloTest', (req, res) => {
  try {
    // Making a blocking, synchronous HTTP request
    const response = request('GET', 'https://jsonplaceholder.typicode.com/todos/1');
    const data = JSON.parse(response.getBody('utf8')); // Parsing the response
    res.json({ message: 'Hello, World!', data });
  } catch (error) {
    res.status(500).json({ message: 'Error occurred', error: error.message });
  }
});

// Asynchronous route using axios
app.get('/helloTestAsync', async (req, res) => {
  try {
    // Making a non-blocking, asynchronous HTTP request
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.json({ message: 'Hello, World!', data: response.data });
  } catch (error) {
    res.status(500).json({ message: 'Error occurred', error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
