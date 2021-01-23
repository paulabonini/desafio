import React from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";

export default class PaymentForm extends React.Component {
  state = {
    cvc: '***',
    expiry: '00/00',
    focus: '',
    name: 'NOME DO TITULAR',
    number: '**** **** **** ****',
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }
  
  render() {
    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        
        <form action="">
            <div className="label-float">
                <input
                    type="number"
                    name="number"
                    placeholder=" "
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                    required
                />
                    <label>Número do cartão</label>
                </div>
                <div className="label-float">
                    <input
                        type="text"
                        name="name"
                        placeholder=" "
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        required
                    />
                    <label> Nome (igual ao cartão)</label>
                </div>
                <div className="flex">
                    <div className="label-float">
                        <input
                            type="date"
                            name="expiry"
                            placeholder=" "
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            required
                        />
                        <label>Validade</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="number"
                            name="cvc"
                            placeholder=" "
                            onChange={this.handleInputChange}
                            onFocus={this.handleInputFocus}
                            required
                        />
                        <label>CVV<i class="fas fa-info-circle"></i></label>
                    </div>
                </div>
                <div>
                    <select value={this.state.quantity} onChange={this.handleChange}>
                        <option className="optionDefault" value="none">Número de parcelas</option>
                        <option value="1">6x R$500,00 sem juros</option>
                        <option value="2">12x R$1.000,00 sem juros</option>
                    </select>
                    <div className="err select">{this.state.quantityErr}</div>
                    </div>
                    
                    <button name="button" type="submit" >CONTINUE</button>
                
			</form>


      </div>
    );
  }
}