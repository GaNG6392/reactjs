import UserContextProvider from './context/userContextProvider';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';

function App() {
  return (
    <UserContextProvider>
      <h1>React with chai </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
