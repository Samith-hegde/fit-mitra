import { useEffect } from 'react';
import { useState } from 'react';

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
    </>
  )
}

export default App
