import NavBar from './components/NavBar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Homepage from './section/Homepage';
import Donation from './section/Donation';
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
          <Route path='/donation' element={<Donation/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App
