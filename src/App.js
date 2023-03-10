import { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './scenes/Welcome';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Content from './scenes/Content';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

export const AuthContext = createContext(null)

function App() {
  const [user, setUser] = useState()
  return (
    <AuthContext.Provider value={{ user, setUser }}>
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/secret" element={(user)
            ? <Content />  
            : <Welcome />
            } />
            {console.log(user)}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route exact path="/"element={<Welcome />} />
        </Routes>
      </header>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
