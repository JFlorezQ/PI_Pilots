import logo from './logo.svg';
import './App.css';
import Create from './Views/Create/Create'
import Detail from './Views/Detail/Detail'
import Home from './Views/Home/Home'
import Landing from './Views/Landing/Landing'

import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'

function App() {
  return (
    <div>
      <Create/>
      <Detail/>
      <Home/>
      <Landing/>
    </div>
    )
}

export default App;
