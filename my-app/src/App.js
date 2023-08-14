// App.js
import React, { useState } from 'react';
import AddWorker from './components/Workers/AddWorker';
import WorkerList from './components/Workers/WorkerList';
import './App.css';

function App() {
  const [workers, setWorkers] = useState([]);
  
  return (
    <div className="App">
      <h1 className='text-white text-center mt-6 text-2xl'>Maaş Otomasyonu</h1>
      <AddWorker setWorkers={setWorkers} />
      <WorkerList workers={workers} setWorkers={setWorkers}/>
    </div>
  );
}

export default App;

