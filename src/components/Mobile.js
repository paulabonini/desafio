import React from 'react';
import cartaoCinza from '../assets/cartaoCinza.svg';
import simboloCartao from '../assets/simboloCartao.svg';

export default props =>
<>
    <div className= "header">
        <div className="etapa">
            <a href="#"><i class="fas fa-chevron-left"></i></a>
            <p className="mobile"><strong>Etapa 2</strong> de 3</p>
            <p className="big">Alterar forma de pagamento</p>
        </div>
        <div className="titulo">
            <img src={simboloCartao}/>
            <p>Adicione um novo cartão de crédito</p>
        </div>
        <div className="card">
            <img src={cartaoCinza} />
            <p className="codeCartao">**** **** **** ****</p>
            <p className="nameCartao">NOME DO TITULAR</p>
            <p className="validCartao">00/00</p>
        </div>
        
    </div>
</>