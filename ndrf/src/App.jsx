import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './section/Homepage';
import Donation from './section/Donation';
import './App.css'
import Map from './section/Map';
import Logistics from './section/Logistics';

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
        </Routes>
      </Router>
    </div>
  );
}

export default App
