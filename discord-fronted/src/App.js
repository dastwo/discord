import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './authPages/loginPage/LoginPage'
import RegisterPage from './authPages/registerPage/RegisterPage'
import DashboardPage from './dashboard/DashboardPage'
import './App.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/dashboard' element={<DashboardPage/>}/>
        <Route path='/' element={<DashboardPage/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
