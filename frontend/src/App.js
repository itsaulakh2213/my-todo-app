import './App.css';
import { Routes, Route} from 'react-router-dom'
import { Fragment } from 'react';
import Home from './components/home/Home';
import Register from './components/RegisterLogin/Register';
import Login from './components/RegisterLogin/Login';
import Post from './components/ProfilePost/Post';
import Profile from './components/ProfilePost/Profile';
import Edit from './components/home/Edit';
import PageNotFound from './components/home/PageNotFound';

function App() {
  return (
 
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='register' element={<Register/>}/>
      <Route  path='login' element={<Login/>}/>
      <Route  path='/post' element={<Post/>}/>
      <Route  path='profile' element={<Profile/>}/>
      <Route  path='/todo/update/:id' element={<Edit/>}/>
      <Route  path="*" element={<PageNotFound/>}/>
    </Routes>

  );
}

export default App;
