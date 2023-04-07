import React from 'react';
import { NavLink } from 'react-router-dom';
import './topbar.css';

export function Topbar() {
    return(
        <header>
            <nav class="nav_topbar">
                <a href="/" class="logo">Lacrei</a>
                <ul>
                    <li><NavLink class="active" to="/">Home</NavLink></li>
                    <li><NavLink class="active" to="/user">Pessoa Usuária</NavLink></li>
                    <li><NavLink class="active" to="/professional">Profissional</NavLink></li>
                </ul>
            </nav>
        </header>
);
}