import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.css'

export function Footer(){
    return(
        <footer>
            <hr/>
            <nav class="nav_footer">
                <ul class="nav_rodape">
                    <li><NavLink class="active"  to="/">Home</NavLink></li>
                    <li><NavLink class="active"  to="/user">Pessoa Usuária</NavLink></li>
                    <li><NavLink class="active" to="/professional">Profissional</NavLink></li>
                </ul>
            </nav>
            <ul class="logo_rodape">
                <li><a href="https://www.instagram.com/lacrei.saude/" target="_blank"><img src="InstagramLogo.png"></img></a></li>
                <li><a href="https://www.facebook.com/lacrei.saude" target="_blank"><img src="FacebookLogo.png"></img></a></li>
                <li><a href="https://www.linkedin.com/company/lacrei/" target="_blank"><img src="LinkedinLogo.png"></img></a></li>
            </ul>
            <p>Desafio Front-end Lacrei</p>
        </footer>
);
}

