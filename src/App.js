
import './App.css';
import Create from './Components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './Components/Read';
import Edit from './Components/Edit';
function App() {
  return (
    <div className='container'>
     <Routes>
      <Route path='/' element={<Read/>}></Route>
      <Route path='/Create' element={<Create/>}></Route>
      <Route path='/Edit' element={<Edit/>}></Route>
     </Routes>
    </div>
   
  );
}

export default App;
