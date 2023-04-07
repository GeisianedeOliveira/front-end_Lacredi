import React from 'react';
import './home.css'

export function Home(){
    return(
        <section class="container">
            <div class="box_container">
                <h1>Boas vindas a Lacrei Saúde</h1>
                <h2>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</h2>
                <section class="button_container">
                    <a href="/user"><button id="button_usuario" type="button">Pessoa Usuária</button></a>
                    <a href="/professional"><button id="button_profissional" type="button">Profissional</button></a>
                </section>
            </div>
            <div class="image_container">
                <img src="container.svg"></img>
            </div>
        </section>
);
}