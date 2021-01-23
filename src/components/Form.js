import React from 'react'

const initialState = {
    cardNumber: "",
    name: "",
    date: "",
    code: "",
    quantity: "",
    cardNumberErr: "",
    nameErr: "",
    dateErr: "",
    codeErr: "",
    quantityErr: ""
}

export default class Form extends React.Component{
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
    };

    validate = () => {
        let cardNumberErr = "";
        let nameErr = "";
        let dateErr = "";
        let codeErr = "";
        let quantityErr = "";

        if (!this.state.cardNumber.includes(" ")) {
            cardNumberErr = "Número de cartão inválido";
        }

        if (!this.state.name.includes(" ")) {
            nameErr = "Insira seu nome completo";
        }

        if (!this.state.date.includes("/")) {
            dateErr = "Data inválida";
        }

        if (this.state.code.length < 3) {
            codeErr = "Código inválido";
        }

        if (!this.state.quantity) {
            quantityErr = "Insira o número de parcelas";
        }

        if (cardNumberErr || nameErr || dateErr || codeErr || quantityErr) {
            this.setState({ cardNumberErr, nameErr, dateErr, codeErr, quantityErr });
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
        return (
            <div className="main">
                <form onSubmit={this.handleSubmit} >
                    <div className="label-float">
                        <input type="text" name="cardNumber" placeholder=" " value={this.state.cardNumber} onChange={this.handleChange} maxLength="19" required/>
                        <label>Número do cartão</label>
                        <div className="err">{this.state.cardNumberErr}</div>
                    </div>
                    <div className="label-float">
                        <input type="text" name="name" placeholder=" " value={this.state.name} onChange={this.handleChange} required/>
                        <label>Nome (igual ao cartão)</label>
                        <div className="err">{this.state.nameErr}</div>
                    </div>
                    <div  className="flex"> 
                        <div className="label-float">
                            <input type="text" name="date" placeholder=" " maxLength="5" value={this.state.date} onChange={this.handleChange} required/>
                            <label>Validade</label>
                            <div className="err">{this.state.dateErr}</div>
                        </div>
                        <div className="label-float">
                            <input type="text" name="code" placeholder=" " maxLength="3" value={this.state.code} onChange={this.handleChange} required/>
                            <label>CVV <i class="fas fa-info-circle"></i></label>
                            <div className="err">{this.state.codeErr}</div>
                        </div>    
                    </div>
                    <div>
                    <select value={this.state.quantity} onChange={this.handleChange}>
                        <option value="none">Número de parcelas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div className="err select">{this.state.quantityErr}</div>
                    </div>
                    
                    <button name="button" type="submit" >CONTINUE</button>
                </form>
            </div>

        )
    }

}
    
    
    
    