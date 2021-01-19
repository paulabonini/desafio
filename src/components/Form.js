import React from 'react'

export default props =>
    <div className="main">
        <form>
            <input type="text" id="card-number" name="card-number" placeholder="Número do cartão" maxLength="16" required />
            <input type="text" id="name" name="name" placeholder="Nome (igual ao cartão)" required />
            <div className="teste">
                <input type="text" id="validade" name="validade" placeholder="Validade" maxLength="5" required />
                <input type="text" id="code" name="code" placeholder="CVV" maxLength="3" required />
            </div>
            <select>
                <option value="none">Número de parcelas</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </form>
        <div className="button">
            <button id="continue" name="continue">CONTINUAR</button>
        </div>
    </div>