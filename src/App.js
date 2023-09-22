import {useState} from 'react'
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import {Routes , Route, Navigate} from 'react-router-dom'
import OrderHistoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar/NavBar';
import {getUser} from "./utilities/users-service"
import styles from './App.module.css';
import Settings from './pages/Settings'
import AdminDashBoard from './pages/AdminDashBoard';

function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className={styles.app}>
     {
     user ? ( 
      <>
      <NavBar user={user} setUser={setUser}/>
     <Routes>
        <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser}/>} />
        <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser}/>} />
        <Route path="/settings" element= {<Settings user={user} setUser={setUser}/>} />
        <Route path="/admin" element={<AdminDashBoard/>}/>
        <Route path="/*" element={<Navigate to="/orders/new" />} />
      </Routes>
      </>
         ): (<AuthPage setUser={setUser}/>)
     }
    </main>
  );
}

export default App;
