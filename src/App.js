import './App.css';
import Login from './component/Login';
import Logout from './component/Logout';
import {useSelector} from 'react-redux';
import { selectUser } from '../src/featurs/userSlice';


function App() {

  const user = useSelector(selectUser);
  return (
    
  <div> { user ? <Logout/> : <Login/>}</div>
  
)};

export default App;
