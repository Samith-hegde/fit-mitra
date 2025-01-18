import { useEffect } from 'react';
import { useState } from 'react';
import { login } from './services/authService';

function App() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/api/exercises/getAllExercises');
    const responseData = await response.json();
    setData(responseData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogin =  async () => {
    try {
      const response = await login({ email: 'samith@gmail.com', password: 'samith', username: 'samith' });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>FitMitra: Your Fitness Companion</h1>
      <div>
        <h2>Exercises</h2>
        <ul>
          {data && data.map((exercise) => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleLogin}>Login</button>;
    </>
  )
}

export default App
