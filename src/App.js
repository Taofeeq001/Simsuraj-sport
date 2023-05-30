import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Allteam from './Components/Allteam';
import MatchDetail from './Components/MatchDetail';

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Allteam/>} />
      <Route path='/sport/:detail/' element={<MatchDetail />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
