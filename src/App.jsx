import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Add from './pages/Add';
import Edit from './pages/Edit';
import { getUserLogged, putAccessToken, logout } from './utils/api';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const onLogout = async () => {
    await logout();
    setAuthedUser(null);
    putAccessToken('');
  };

  const onLoginSuccess = async (token) => {
    putAccessToken(token);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  useEffect(() => {
    const fetchUserLogged = async () => {
      const { data } = await getUserLogged();
      setAuthedUser(data);
      setInitializing(false);
    };

    fetchUserLogged();
  }, []);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <Routes>
        <Route path="/*" element={<Login loginSuccess={onLoginSuccess} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <>
      <HeaderBar authedUser={authedUser} logout={onLogout} />
      <Routes>
        <Route path="/" element={<Home authedUser={authedUser} />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
