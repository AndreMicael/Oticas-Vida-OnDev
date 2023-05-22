import React from 'react';
import "./contact.css";
import fb from "../img/fb.png"
import ig from "../img/ig.png"
import tt from "../img/tt.png"
import local from "../img/local.png"
import email from "../img/email.png"
import telefone from "../img/telefone.png"



function Contact () {
    return ( 

        <section className='contact-container'>
            <div className='limitar-secao'> 

            <h1>Fale conosco</h1> <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

            <div className='contatos-flex'>
                <div className='contact'> 
                <h1>
                Contatos
                </h1>
                <ul>
                    <li> <img src={local}/> Nova Iguaçu, RJ</li>
                    <li>  <img src={telefone}/> (21) 9999-9999</li>
                    <li> <img src={email}/> contato@oticavida.com</li>
                </ul>
                </div>


                <div className='contact'> 
                <h1>
                Nossas Redes Sociais
                </h1>
                <ul>
                    <li> <img src={fb}/> /OticaVida </li>
                    <li> <img src={ig}/> @oticavidarj </li>
                    <li> <img src={tt}/> @oticavidarj </li>
                </ul>
                </div>

             </div>

            </div>
        </section>

     );
}

export default Contact ;