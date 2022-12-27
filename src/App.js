import './App.css';
import EmptyPage from "./EmptyPage/EmptyPage";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
   <Route path="/" element={<Home/>} />
    <Route path="/defaultpage" element={<EmptyPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
  }
export default App;
