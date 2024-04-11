
import { Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./Page/HomePage";
import LoginPage from "./Page/LoginPage";
import RegisterPage from "./Page/RegisterPage";
import HotelsIdPage from "./Page/HotelsIdPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHotelsThunk } from "./store/states/hotels.slice";
import Header from "./Components/shared/Header";

function App() {


  const dispatch = useDispatch()

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))
  }, [])
  

  return (
   <div>
    <Header />
    <Routes >
        <Route  path="/" element={<HomePage/>} />
        <Route  path="/hotels/:id" element={<HotelsIdPage/>} />
        <Route  path="/register" element={<RegisterPage/>} />
        <Route  path="/login" element={<LoginPage />} />
    </Routes>
   </div>
  )
}

export default App
