import React from 'react';
import Cards from 'react-credit-cards';
import "react-credit-cards/es/styles-compiled.css";

const initialState = {
  cvc: '***',
  expiry: '00/00',
  focus: '',
  name: 'NOME DO TITULAR',
  number: '**** **** **** ****',
  numberErr: "",
  nameErr: "",
  expiryErr: "",
  cvcErr: "",
  quantityErr: ""
};

export default class PaymentForm extends React.Component {

  state = {
    cvc: '***',
    expiry: '00/00',
    focus: '',
    name: 'NOME DO TITULAR',
    number: '**** **** **** ****',
    numberErr: "",
    nameErr: "",
    expiryErr: "",
    cvcErr: "",
    quantityErr: ""
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }
  
  handleInputChange = (e) => {
    const { name, value } = e.target;
    
    this.setState({ [name]: value });
  }

  

  validate = () => {
    let numberErr = "";
    let nameErr = "";
    let expiryErr = "";
    let cvcErr = "";
    let quantityErr = "";

    let numberPattern="[\d| ]{16,22}";
    let expiryPattern="\d\d/\d\d";
    let cvcPattern="\d{3,4}";

    if (!this.state.number.match(numberPattern)) {
        numberErr = "Número de cartão inválido";
    }

    if (!this.state.name.includes(" ")) {
        nameErr = "Insira seu nome completo";
    }

    if (!this.state.expiry.match(expiryPattern)) {
        expiryErr = "Data inválida";
    }

    if (!this.state.cvc.match(cvcPattern)) {
        cvcErr = "Código inválido";
    }

    if (document.getElementById("select").value == "" ) {
        quantityErr = "Insira o número de parcelas";
    }

    if (numberErr || nameErr || expiryErr || cvcErr || quantityErr) {
        this.setState({ numberErr, nameErr, expiryErr, cvcErr, quantityErr });
        return false;
    }

    return true;
};

handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        console.log(this.state);
        //clear form
        this.setState(initialState);
    }
    
};

  render() {
    let inputStyle= {
      borderBottom: "2px solid #C9C9C9"
    };

    let errStyle = {
      borderBottom: "2px solid #DE4B4B"
    };

    return (
      <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />

        <form action="" onSubmit={this.handleSubmit}>
          <div className="label-float">
            <input
              type="text"
              name="number"
              placeholder=" "
              maxLength="19"
              style={
                !this.state.numberErr ? inputStyle : errStyle
              }
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
              required
            />
            <label>Número do cartão</label>
            <div className="err">{this.state.numberErr}</div>
          </div>
          <div className="label-float">
            <input
                type="text"
                name="name"
                placeholder=" "
                style={
                  !this.state.nameErr ? inputStyle : errStyle
                }
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
            />
            <label> Nome (igual ao cartão)</label>
            <div className="err">{this.state.nameErr}</div>
          </div>
          <div className="flex">
            <div className="label-float">
              <input
                type="text"
                name="expiry"
                placeholder=" "
                style={
                  !this.state.expiryErr ? inputStyle : errStyle
                }
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
              <label>Validade</label>
              <div className="err">{this.state.expiryErr}</div>
            </div>
            <div className="label-float test">
              <input
                type="text"
                name="cvc"
                placeholder=" "
                maxLength="3"
                style={
                  !this.state.cvcErr ? inputStyle : errStyle
                }
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
                required
              />
              <label>CVV <i class="fas fa-info-circle"></i></label>
              <div className="err">{this.state.cvcErr}</div>
            </div>
          </div>
          <div className="arrow">
            <select id="select" name="quantity" onChange={this.handleChange} onFocus={this.handleInputFocus} style={
                !this.state.quantityErr ? inputStyle : errStyle
              }>
              <option className="optionDefault" value="">Número de parcelas</option>
              <option value="1">6x R$500,00 sem juros </option>
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