import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './section/Homepage'
import Donation from './section/Donation'
import './App.css'

import Map from './section/Map';
import Logistics from './section/Logistics';
import Footer from './components/Footer';
import Incidents from './section/Incidents';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/donation' element={<Donation/>}></Route>
          <Route path='/map' element={<Map/>}></Route>
          <Route path='/logistics' element={<Logistics/>}></Route>
          <Route path='/incidents' element={<Incidents />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );

}

export default App
