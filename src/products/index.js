import React from 'react';
import "./products.css";
import Oculos01 from '../img/oculos01.png'
import Oculos02 from '../img/oculos02.png'
import Oculos03 from '../img/oculos03.png'
import Oculos04 from '../img/oculos04.png'



function Product() {
    return (  

            <section className='product-container'>
                 <h1>Nossos produtos </h1>
<p className="limitar-secao product-text"> Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>   
              <div className='limitar-secao content-container'>

                          
              <div className='cards smooth-transition'> <h1>Óculos de Grau</h1> <img src={Oculos01}/>      <p>R$ 500,00</p>  </div>
              <div className='cards smooth-transition'> <h1>Óculos Transition</h1><img src={Oculos02}/>    <p>R$ 750,00</p></div>
              <div className='cards smooth-transition'> <h1>Óculos de Sol</h1><img src={Oculos03}/>        <p>R$ 700,00</p></div>
              <div className='cards smooth-transition'> <h1>Óculos Infantil</h1><img src={Oculos04}/>      <p>R$ 500,00</p></div>

              <div className='product-guarantee'>
                
            
            
             <p>Todos os nossos produtos incluem:</p>
             
             <ul>
                    <li>Garantia de 1 ano</li>
                    <li> Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li> Flexibilidade de pagamento</li>


             </ul>
             </div> 
               </div>
            </section>

    );
}

export default Product

 
;