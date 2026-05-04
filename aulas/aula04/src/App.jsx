import { Routes, Route } from 'react-router'
import About from './pages/About';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import Settings from './pages/Settings';

function App() {
  return <Routes>
    <Route path='/' element = {<Home/>}> </Route>
    <Route path='/about' element = {<About/>}> </Route>
    <Route path='/settings' element = {<Settings/>}> </Route>
    <Route path='/perfil' element = {<Perfil/>}> </Route>
  </Routes>
}

export default App; 