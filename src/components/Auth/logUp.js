import React from 'react';
import Modal from '../UI/Modal/Modal';
import axios from 'axios';

import './auth.scss';

import { checkValidaty } from '../../tools/checkValidaty';

class LogUpBlock extends React.Component {

    state = {
        logUpForm : {
            phone: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    isPhone: true
                }
            },
            email: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    isEmail: true
                }
            },
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
                    minLength: 6,
                }
            }
        },
        formIsValid: false,
        emailModalOpened: false,
        error: null
    }

    inputChangedHandler = (event, inputID) => {
        const updatedLogUpForm = {
            ...this.state.logUpForm
        };
        const updatedFormElement = {
            ...updatedLogUpForm[inputID]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        console.log(updatedFormElement.value);
        updatedFormElement.valid = checkValidaty(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        if (inputID === 'confirmedPassword') {
            updatedFormElement.valid = updatedFormElement.value === updatedLogUpForm['password'].value;
        }

        updatedLogUpForm[inputID] = updatedFormElement;

        let formIsValid = true;
        for (let inputIDs in updatedLogUpForm) {
            formIsValid = updatedLogUpForm[inputIDs].valid && formIsValid;
        };

        this.setState({
            logUpForm: updatedLogUpForm,
            formIsValid: formIsValid
        });
    }

    onSubmitFormHandler = () => {
        axios.post('http://localhost:3000/signup', {
            phoneNumber: this.state.logUpForm.phone.value,
            email: this.state.logUpForm.email.value,
            password: this.state.logUpForm.password.value
        })
        .then(result => {
            if (result.status === 200 ) {
                this.setState({
                    emailModalOpened: true
                });
            }
            console.log(result);
        })
        .catch(err => {
            let message = '';
            if (this.state.language === 'RU') {
                if ( err.response.status === 400 ) {
                    message = 'Эта почта уже занята'
                } 
                if ( err.response.status === 500 ) {
                    message = 'Номер телефона уже занят'
                }
            } else {
                if ( err.response.status === 400 ) {
                    message = 'Ця пошта уже зайнята'
                } 
                if ( err.response.status === 500 ) {
                    message = 'Номер телефону вже зайнятий'
                }
            }
            this.setState({ error: message });
        });
    }

    onEmailModalClosedHandler = () => {
        this.setState({
            emailModalOpened: false
        })
    }
    render() {

        const labelInvalidStyle = "label-invalid-style";
        const inputInvalidStyle = "input-invalid-style";
        const disabledButtonStyle = "form-button-disabled log-up-button-fix";

        return (
            <>
            <Modal
            show={this.state.emailModalOpened}
            modalClosed={this.onEmailModalClosedHandler}
            >       
                <div style={{textAlign: 'center'}}>
                    <p>
                        {this.state.language === "RU" ? "Пожалуйста проверьте свою почту для подтверждения аккаунта" : "Будь-ласка перевірте свою пошту для підтвердження аккаунту" }
                    </p>
                </div>
            </Modal>

            <div className="log-in-block__container" style={{paddingBottom: '40px'}}>
                <div className="log-in-block log-up-block-fix">
                    <h3>{this.state.language==="RU" ? "Регистрация" : "Реєстрація"}</h3>

                    <label
                    className={!this.state.logUpForm.phone.valid && this.state.logUpForm.phone.touched ? labelInvalidStyle : null}
                    >
                        Ваш номер телефона
                    </label>
                    <input 
                    type="text" 
                    className={!this.state.logUpForm.phone.valid && this.state.logUpForm.phone.touched ? inputInvalidStyle : null }
                    placeholder="+380-99-99-99-999"
                    value={this.state.logUpForm.phone.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "phone")} />

                    <label
                    className={!this.state.logUpForm.email.valid && this.state.logUpForm.email.touched ? labelInvalidStyle : null}
                    >
                        Ваш email
                    </label>
                    <input 
                    type="text" 
                    className={!this.state.logUpForm.email.valid && this.state.logUpForm.email.touched ? inputInvalidStyle : null }
                    placeholder="Ваш email"
                    value={this.state.logUpForm.email.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "email")} />
                    
                    <label 
                    style={{marginTop: '20px'}}
                    className={!this.state.logUpForm.password.valid && this.state.logUpForm.password.touched ? labelInvalidStyle : null }
                    >
                        Ваш пароль
                    </label>
                    <input 
                    type="password" 
                    className={!this.state.logUpForm.password.valid && this.state.logUpForm.password.touched ? inputInvalidStyle : null }
                    placeholder={this.state.language === "RU" ? "Введите ваш пароль" : "Введіть ваш пароль"} 
                    value={this.state.logUpForm.password.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "password")} />

                    <label 
                    style={{marginTop: '20px'}}
                    className={!this.state.logUpForm.confirmedPassword.valid && this.state.logUpForm.confirmedPassword.touched ? labelInvalidStyle : null }
                    >
                        {this.state.language === "RU" ? "Подтвердите пароль" : "Підтвердіть пароль"}
                    </label>
                    <input 
                    type="password" 
                    className={!this.state.logUpForm.confirmedPassword.valid && this.state.logUpForm.confirmedPassword.touched ? inputInvalidStyle : null }
                    placeholder={this.state.language === "RU" ? "Подтвердите ваш пароль" : "Підтвердіть ваш пароль"}  
                    value={this.state.logUpForm.confirmedPassword.value} 
                    onChange={(event)=>this.inputChangedHandler(event, "confirmedPassword")} />

                    {this.state.error && <p className="log-in-block__error">{this.state.error}</p>}

                    <button 
                    style={{ width: '100%', minWidth: '220px', padding: '20px' }}
                    disabled={! this.state.formIsValid} className={!this.state.formIsValid ? disabledButtonStyle : "log-up-button-fix"}
                    onClick={this.onSubmitFormHandler}>
                        {this.state.language === "RU" ? "Зарегистрироваться" : "Зареєструватись"}
                    </button>
                </div>
                <p onClick={this.props.switchMode}>
                    {this.state.language === "RU" ? "У меня есть аккаунт" : "У мене є аккаунт"}
                </p>
            </div>
            </>
        );
    }
}

export default LogUpBlock;