import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router";
import SearchPage from './pages/SearchPage';
import SignUpPage from './pages/SignUpPage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>}/>

        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/search" element={<SearchPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
