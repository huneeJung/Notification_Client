import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Notify from './pages/Notify/Notify';
import Example from './example/Example';
import LoginComponent from "./pages/Auth/Login/LoginComponent";
import RegisterComponent from "./pages/Auth/Register/RegisterComponent"; 

import './App.css'

function App() {
 return(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginComponent/>} />
        <Route path="/notify" exact element={<Notify/>} />
        <Route path="/example" exact element={<Example/>} />
        <Route path="/register" element={<RegisterComponent />}></Route>
        <Route path="/login" element={<LoginComponent />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
    </Routes>
  </BrowserRouter>
 );
}

export default App