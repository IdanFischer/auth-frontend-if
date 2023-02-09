import { Routes, Route } from 'react-router-dom';
import Welcome from './scenes/Welcome';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Content from './scenes/Content';
import './App.css';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState()
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/secret" element={(user) 
            ? <Content /> 
            : <Welcome />
            } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/"element={<Welcome />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;