import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Recruitment from './pages/Recruitment';
import ShiftSchedule from './pages/ShiftSchedule';
import Sectors from './pages/Sectors';
import Payroll from './pages/Payroll';
import Schedule from './pages/Schedule';
import Maintenance from './pages/Maintenance';
import Request from './pages/Request';
import Settings from './pages/Settings';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
        <Header />
        <div className="page-content">
          
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/recruitment" element={<Recruitment />} />
            <Route path="/shift-schedule" element={<ShiftSchedule />} />
            <Route path="/sectors" element={<Sectors />} />
            <Route path="/payroll" element={<Payroll />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/request" element={<Request />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
