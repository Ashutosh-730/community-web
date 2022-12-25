import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">

        <div className="container">
            <Routes>
                
              <Route 
                path="/login" 
                element={<Login />}  
              />  
              <Route 
                path="/" 
                element={<Home />}  
              />
              <Route 
                path="/register" 
                element={<Register/>}  
              /> 
            </Routes>
        </div>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
