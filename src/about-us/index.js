import React from 'react';
import './about.css'
import loja from '../img/loja.png'
import atendimento from '../img/atendimento.png'


function About() {
    return ( 
        <section className='about-container'>
            <div className="limitar-secao container ">
                <h1>QUEM SOMOS NÓS?</h1>
                <p> Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa,
                     sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>
                    <div className='All-Cards'>
                        <div className='Cards'> <img src={loja}/> </div>
                        <div className='Cards text-padding'> <div className='card-text-container'><h1>Nossas Filiais </h1> <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p></div> </div>
                        <div className='Cards text-padding '>  <div className='card-text-container'><h1>Atendimento flexível</h1> <p>Nossa equipe possui é treinada para te atender</p> </div> </div>
                        <div className='Cards'> <img src={atendimento}/> </div>
                    </div> 

            </div>
        

        </section>
     );
}

export default About;