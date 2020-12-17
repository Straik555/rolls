import React from 'react';
import axios from 'axios';

import Modal from '../../UI/Modal/Modal';
import { checkValidaty } from '../../../tools/checkValidaty';
import '../../../components/Auth/auth.scss';

class MobileRestorePassword extends React.Component {

    state = {
        email: {
            value: '',
            touched: false,
            valid: false,
            validation: {
                required: true,
                isEmail: true
            }
        },
        error: null,
        emailModalOpened: false
    }

    inputChangedHandler = (event) => {
        const updatedEmail = {
            ...this.state.email
        };

        updatedEmail.value = event.target.value;
        updatedEmail.touched = true;

        updatedEmail.valid = checkValidaty(
            updatedEmail.value,
            updatedEmail.validation
        );

        this.setState({
            email: updatedEmail
        });
    }

    onSubmitFormHandler = () => {
        axios.post('http://localhost:3000/recover', {
            email: this.state.email.value
        })
            .then(res => {
                this.setState({
                    emailModalOpened: true
                }); 
            })
            .catch(err => {
                if ( err.response.status === 401 ) {
                    this.setState({
                        error: 'Пользователь с таким email не существует'
                    })
                }
            });
    }

    onEmailModalClosedHandler = () => {
        this.setState({
            emailModalOpened: false
        });
    }

    render() {

        const labelInvalidStyle = "label-invalid-style";
        const inputInvalidStyle = "input-invalid-style";
        const disabledButtonStyle = "form-button-disabled";

        return (
            <>
                <Modal
                show={this.state.emailModalOpened}
                modalClosed={this.onEmailModalClosedHandler}
                >       
                    <div style={{textAlign: 'center'}}>
                        <p>
                            {"Пожалуйста проверьте свою почту для смены пароля"}
                        </p>
                    </div>
                </Modal>
                <div className="log-in-block__container" style={{paddingBottom: '40px'}}>
                    <div className="log-in-block log-up-block-fix">
                        <h3>{"Восстановление пароля"}</h3>
    
                        <label
                        className={!this.state.email.valid && this.state.email.touched ? labelInvalidStyle : null}
                        >
                            Ваш email
                        </label>
                        <input 
                        type="text" 
                        className={!this.state.email.valid && this.state.email.touched ? inputInvalidStyle : null }
                        placeholder="Ваш email"
                        value={this.state.email.value} 
                        onChange={(event)=>this.inputChangedHandler(event)} />
    
                        {this.state.error && <p className="log-in-block__error">{this.state.error}</p>}
    
                        <button 
                        style={{ width: '100%', minWidth: '220px', padding: '20px' }}
                        disabled={! this.state.email.valid} className={!this.state.email.valid ? disabledButtonStyle : "log-up-button-fix"}
                        onClick={this.onSubmitFormHandler}>
                            {"Восстановить пароль"}
                        </button>
                    </div>
                    <p onClick={this.props.switchMode}>
                        {"Обратно к входу"}
                    </p>
                </div>
            </>
        );
    }
};

export default MobileRestorePassword;