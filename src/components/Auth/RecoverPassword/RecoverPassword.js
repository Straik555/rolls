import React from 'react';
import axios from 'axios';


import { checkValidaty } from '../../../tools/checkValidaty';

class RecoverPassword extends React.Component {

    state = {
        form: {
            password: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            },
            confirmedPassword: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        },
        token: null,
        formIsValid: false,
        loading: true
    }

    componentDidMount() {
        const token = this.props.match.params.token;
        this.setState({token: token});
        axios.get(`htpp://localhost:3000/reset/toUser/${token}`)
            .then(res => {
                this.setState({loading: false});
                console.log(res);
            })
            .catch(err => {
                console.log(err);
                console.log(err.response);
            });
    }

    inputChangedHandler = (event, inputID) => {
        const updatedForm = {
            ...this.state.form
        };
        const updatedFormElement = {
            ...updatedForm[inputID]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        console.log(updatedFormElement.value);
        updatedFormElement.valid = checkValidaty(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        if (inputID === 'confirmedPassword') {
            updatedFormElement.valid = updatedFormElement.value === updatedForm['password'].value;
        }

        updatedForm[inputID] = updatedFormElement;

        let formIsValid = true;
        for (let inputIDs in updatedForm) {
            formIsValid = updatedForm[inputIDs].valid && formIsValid;
        };

        this.setState({
            form: updatedForm,
            formIsValid: formIsValid
        });
    }

    onButtonPressed = () => {
            axios.post('http://localhost:3000/save/reseted', {
                password: this.state.form.password.value,
                resetLink: this.state.token
            })
                .then(res => {
                    //this.props.history.push('/log-in?changed-password=true');
                    console.log(res);
                })
                .catch(err => {
                    console.log(err, err.response);
                });
    }

    render() {

        const labelInvalidStyle = "label-invalid-style";
        const inputInvalidStyle = "input-invalid-style";
        const disabledButtonStyle = "form-button-disabled";

        return (
            <>
                <div className="log-in-block__container" style={{paddingBottom: '40px', marginTop: '40px'}}>
                    <div className="log-in-block log-up-block-fix">
                        <h3>{"Восстановление пароля"}</h3>
    
                        <label
                        className={!this.state.form.password.valid && this.state.form.password.touched ? labelInvalidStyle : null}
                        >
                            Введите новый пароль
                        </label>
                        <input 
                        type="password" 
                        className={!this.state.form.password.valid && this.state.form.password.touched ? inputInvalidStyle : null }
                        placeholder="Введите пароль"
                        value={this.state.form.password.value} 
                        onChange={(event)=>this.inputChangedHandler(event, 'password')} />

                        <label
                        className={!this.state.form.confirmedPassword.valid && this.state.form.confirmedPassword.touched ? labelInvalidStyle : null}
                        >
                            Подтвердите пароль
                        </label>
                        <input 
                        type="password" 
                        className={!this.state.form.confirmedPassword.valid && this.state.form.confirmedPassword.touched ? inputInvalidStyle : null }
                        placeholder="Введите пароль"
                        value={this.state.form.confirmedPassword.value} 
                        onChange={(event)=>this.inputChangedHandler(event, 'confirmedPassword')} />
    
                        {this.state.error && <p className="log-in-block__error">{this.state.error}</p>}
    
                        <button 
                        style={{ width: '100%', minWidth: '220px', padding: '20px' }}
                        disabled={! this.state.form.password.valid} className={!this.state.form.password.valid ? disabledButtonStyle : "log-up-button-fix"}
                        onClick={this.onButtonPressed}>
                            {"Восстановить пароль"}
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default RecoverPassword;