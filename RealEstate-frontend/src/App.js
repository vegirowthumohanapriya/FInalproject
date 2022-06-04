import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Homepage from './Components/Homepage/Homepage';
import Propertydetail from './Components/Forms/Propertydetail'
import Basicinfo from './Components/Forms/Basicinfo';
import Generalinfo from './Components/Forms/Generalinfo';
import Locationinfo from './Components/Forms/Locationinfo';
import {createContext,useState} from 'react'

export const fileStorage = createContext()


function App() {
  const [file1,Setfile] = useState(null)
  return (
    <div className="App">
    <fileStorage.Provider value={[file1,Setfile]}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path='Register' element={<Register/>} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="Basicinfo" element={<Basicinfo/>} />
          <Route path="Propertydetail" element={<Propertydetail/>} />
          <Route path="Generalinfo" element={<Generalinfo/>} />
          <Route path="Locationinfo" element={<Locationinfo/>} />

          {/* 
          <Route path="contact" element={<h1></h1>} />
          <Route path="*" element={<h1></h1>} /> */}
        
      </Routes>
    </BrowserRouter>
    </fileStorage.Provider>
       
        
    </div>
  );
}

export default App;
