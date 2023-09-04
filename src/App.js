
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat'
import { BrowserRouter , Route, Routes} from "react-router-dom";
import db from './firebase';
import { useState } from 'react';
import Login from './Login';
import { useStateValue } from './StateProvider';
function App() {
  const [{user},dispatch] = useStateValue();
  return (
    <div className="App">
      {
        !user ? (
          <Login />
        ) :(
      <div className='app_body'>
      <BrowserRouter>
      <Sidebar />
      <Routes>
            <Route path="/rooms/:roomId" element={<Chat/>}/>
            <Route path="/" element={<Chat/>}/>
         </Routes>
        </BrowserRouter>
      </div>
      )
    }
    </div>
  );
}

export default App;
