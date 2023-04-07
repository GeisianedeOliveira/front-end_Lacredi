import React from 'react';
import { Topbar } from './components/topbar/topbar';
import { Routes, Route} from 'react-router-dom';
import { Footer } from './components/footer/footer';
import { Home } from './home/home'
import { Professional } from './professional/professional'
import { User } from './user/user'

function AppRouter() {

    return (
    <React.Fragment>
        <Topbar/>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/professional" element={<Professional />} /> 
            <Route path="/user" element={<User/>} />
        </Routes>
        <Footer/>
    </React.Fragment>
);
}

export default AppRouter