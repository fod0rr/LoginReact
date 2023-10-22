// App.js
import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setIsLoggedIn(true);
    } else {
      alert('Credenciais inválidas. Tente novamente.');
    }
  };

  const handleRegister = () => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    alert('Registro realizado com sucesso!');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard username={username} handleLogout={handleLogout} />
      ) : (
        <div className="form-container">
          {isLogin ? (
            <div>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Entrar</button>
              <p>
                Não tem uma conta? <span onClick={() => setIsLogin(false)}>Registrar</span>
              </p>
            </div>
          ) : (
            <div>
              <h2>Cadastro</h2>
              <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleRegister}>Registrar</button>
              <p>
                Já tem uma conta? <span onClick={() => setIsLogin(true)}>Entrar</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
