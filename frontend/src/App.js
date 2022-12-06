import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Home from './components/home/Home';
import Register from './components/RegisterLogin/Register';
import Login from './components/RegisterLogin/Login';
import Post from './components/ProfilePost/Post';
import Profile from './components/ProfilePost/Profile';

function App() {
  return (
  <Fragment>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='register' element={<Register/>}/>
      <Route  path='login' element={<Login/>}/>
      <Route  path='/post' element={<Post/>}/>
      <Route  path='profile' element={<Profile/>}/>
    </Routes>
  </Fragment>
  );
}

export default App;
