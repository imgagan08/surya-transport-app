import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './home/pages/Home';
import AboutUs from './aboutUs/pages/AboutUs';
import AreaServed from './areaServed/pages/AreaServed';
import ContactUs from './contactUs/pages/ContactUs';
import ServicesProvided from './servicesProvided/pages/ServicesProvided';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/areaServed" element={<AreaServed />} />
                <Route path="/contactUs" element={<ContactUs />} />
                <Route path="/servicesProvided" element={<ServicesProvided />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
