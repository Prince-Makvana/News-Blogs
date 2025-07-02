
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import { useState } from "react";
import { DarkModeContext } from "./components/DarkModeContext";

function App() {

  const [isdark, setIsdark] = useState(false);

  return (
    <>
      <DarkModeContext.Provider value={{ isdark, setIsdark }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<News categoryprob="general" />} />
            <Route path='/science' element={<News categoryprob="science" />} />
            <Route path='/entertainment' element={<News categoryprob="entertainment" />} />
            <Route path='/health' element={<News categoryprob="health" />} />
            <Route path='/business' element={<News categoryprob="business" />} />
            <Route path='/sports' element={<News categoryprob="sports" />} />
            <Route path='/technology' element={<News categoryprob="technology" />} />

          </Routes>
        </BrowserRouter>
      </DarkModeContext.Provider>

    </>
  )
}

export default App
