import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import PageNotFound from './components/PageNotFound';
import Contact from './components/Contact';
import Details from './components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/details" element={<Details/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
