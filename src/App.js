import logo from './logo.svg';
import { Home } from './components/Home';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
        <div>Hello!
          <div>
            <Routes>
              <Route exact path="/home" element={<Home/>}>
                
              </Route>
            </Routes>
          </div>

        </div>

    </Router>
  );
}

export default App;
