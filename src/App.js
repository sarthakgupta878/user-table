// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/Navbar';
import User from './components/User';
import Alert from './components/Alert';
import UserState from './context/user/UserState';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    // console.log("app")
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  return (
    <>
  <UserState>

      <NavBar />
      <Alert alert={alert} />
      <User showAlert={showAlert} />

  </UserState>

    </>
  );
}

export default App;
