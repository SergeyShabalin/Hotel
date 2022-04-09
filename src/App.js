import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home/Home";
import BookingList from "./Components/BookingList/BookingList";
import Navbar from "./Components/Navbar/Navbar";


function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/BookingList" element={<BookingList/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
