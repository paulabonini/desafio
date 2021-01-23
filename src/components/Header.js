import React from 'react';
import simboloCartao from '../assets/simboloCartao.svg';

export default props =>
<>
    <div className= "header">
        <div className="etapa">
            <a href="#"><i class="fas fa-chevron-left"></i></a>
            <p className="mobile"><strong>Etapa 2</strong> de 3</p>
        </div>
        <div className="big">
            <a href="#"><i class="fas fa-chevron-left"></i></a>
            <p>Alterar forma de pagamento</p>
        </div>
        <div className="titulo">
            <img src={simboloCartao}/>
            <p>Adicione um novo cartão de crédito</p>
        </div>
    </div>
</>