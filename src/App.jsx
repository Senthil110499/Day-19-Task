import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';
import Books from './Components/Books';


const App = () => {
  const [id, setId] = useState(0)
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' element={<Books setId={setId} />} />
          <Route path='/edituser/:id' element={<EditUser id={id} />} />
          <Route path='/adduser' element={<AddUser/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;