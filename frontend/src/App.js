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
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='register' element={<Register/>}/>
      <Route exact path='login' element={<Login/>}/>
      <Route exact path='post' element={<Post/>}/>
      <Route exact path='profile' element={<Profile/>}/>
    </Routes>
  </Fragment>
  );
}

export default App;
