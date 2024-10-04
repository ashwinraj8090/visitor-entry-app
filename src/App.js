import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVisitors from './components/AddVisitors';
import ViewAllVisitors from './components/ViewAllVisitors';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<AddVisitors/>}/>
        <Route path="/viewall" element={<ViewAllVisitors/>}/>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
