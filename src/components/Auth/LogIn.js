import React from 'react';
import axios from 'axios';
import store from 'store';
import {withTranslation} from "react-i18next";

import './auth.scss';

import Modal from '../UI/Modal/Modal';
import { checkValidaty } from '../../tools/checkValidaty';
import { storeContext } from '../../context/providerContext';
import { ACTIONS } from "../../context/providerContext";

class LogInBlock extends React.Component {

    static contextType = storeContext;

    state = {
        logInForm : {
            phone: {
                value: '',
                touched: false,
                valid: false,
                validation: {
                    required: true,
                    isPhone: true
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
            }
        },
        formIsValid: false,
        error: null,
        modalRecoverPassword: false
    }

    componentDidMount() {
        if ( this.props.location.search === '?changed-password=true' ) {
            this.setState({ modalRecoverPassword: true });
        }
    }

    inputChangedHandler = (event, inputID) => {
        const updatedLogInForm = {
            ...this.state.logInForm
        };
        const updatedFormElement = {
            ...updatedLogInForm[inputID]
        };

        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        console.log(updatedFormElement.value);
        updatedFormElement.valid = checkValidaty(
            updatedFormElement.value,
            updatedFormElement.validation
        );
        updatedLogInForm[inputID] = updatedFormElement;

        let formIsValid = true;
        for (let inputIDs in updatedLogInForm) {
            formIsValid = updatedLogInForm[inputIDs].valid && formIsValid;
        };

        this.setState({
            logInForm: updatedLogInForm,
            formIsValid: formIsValid
        });
    }

    onSubmitFormHandler = () => {
        axios.post('http://localhost:3000/login', {
            phone: this.state.logInForm.phone.value,
            password: this.state.logInForm.password.value
        }).then(res => {
            const token = res.data.token;
            const storage = store.get('24rolls');
            storage.user = {
                token: token
            };
            store.set('24rolls', storage);
            this.setState({
                error: null
            });

            axios.get('http://localhost:3000/user/', {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
            })
            .then(res => {
                const bonus = res.data.user.sumUserBonus;
                const { dispatch } = this.context;

                dispatch({ type: ACTIONS.SET_BONUS_AMOUNT, bonus: bonus});

                this.props.history.push('/24ROLLS?redirectpersonal=true');
            })
            .catch(err => console.log(err, err.response));
        })
        .catch(err => {
            let message = '';
            const language = store.get('24rolls').customOptions.language;
            if (language === 'RU') {
                if ( err.response.status === 404 ) {
                    message = 'Неверный пароль'
                } 
                if ( err.response.status === 401 ) {
                    message = 'Пользователь с таким номером телефона не зарегистрирован'
                }
            } else {
                if ( err.response.status === 404 ) {
                    message = 'Невірний пароль'
                } 
                if ( err.response.status === 401 ) {
                    message = 'Користувач з таким номером телефону не зареєстрований'
                }
            }
            this.setState({ error: message });
        });
    }

    onModalRecoverPasswordHandler = () => {
        this.setState({
            modalRecoverPassword: false
        });
        this.props.history.push('/log-in');
    }

    render() {

        const labelInvalidStyle = "label-invalid-style";
        const inputInvalidStyle = "input-invalid-style";
        const disabledButtonStyle = "form-button-disabled";
        const {t} = this.props;

        return (
            <>
            {this.props.forRightMenu ?
            (
                <div>
                        <h3>{t('order.logIn.entrance')}</h3>
                        <label
                        className={
                            !this.state.logInForm.phone.valid && 
                            this.state.logInForm.phone.touched ? labelInvalidStyle : null}
                        >
                            {t('order.logIn.phone')}
                        </label>
                        <input 
                        type="text" 
                        className={
                            !this.state.logInForm.phone.valid && 
                            this.state.logInForm.phone.touched ? inputInvalidStyle : null }
                        placeholder="+380631122333"
                        value={this.state.logInForm.phone.value} 
                        onChange={(event)=>this.inputChangedHandler(event, "phone")} />
                        <label 
                        style={{marginTop: '20px'}}
                        className={
                            !this.state.logInForm.password.valid && 
                            this.state.logInForm.password.touched ? labelInvalidStyle : null }
                        >
                            {t('order.logIn.password')}
                        </label>
                        <input 
                        type="password" 
                        className={
                            !this.state.logInForm.password.valid && 
                            this.state.logInForm.password.touched ? inputInvalidStyle : null }
                        placeholder={t('order.logIn.enterPassword')}
                        value={this.state.logInForm.password.value} 
                        onChange={(event)=>this.inputChangedHandler(event, "password")} />

                        <p className="log-in-block__error">{this.state.error}</p>

                        <button 
                        disabled={!this.state.formIsValid} 
                        className={!this.state.formIsValid ? disabledButtonStyle : null}
                        onClick={this.onSubmitFormHandler}>
                            {t('button.logIn')}
                        </button>
                </div>
            )
            :
            (
            <>
                <Modal
                show={this.state.modalRecoverPassword}
                modalClosed={this.onModalRecoverPasswordHandler}>
                    <div style={{textAlign: 'center'}}>
                        <p style={{
                            color: 'green',
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: '24px'
                        }}>
                            {'Вы успешно сменили пароль!'}
                        </p>
                    </div>
                </Modal>
                <div className="log-in-block__container">
                    <div className="log-in-block">
                        <h3>{t('order.logIn.entrance')}</h3>
                        <label
                        className={!this.state.logInForm.phone.valid && this.state.logInForm.phone.touched ? labelInvalidStyle : null}
                        >
                            {t('order.logIn.phone')}
                        </label>
                        <input 
                        type="text" 
                        className={!this.state.logInForm.phone.valid && this.state.logInForm.phone.touched ? inputInvalidStyle : null }
                        placeholder="+380631122333"
                        value={this.state.logInForm.phone.value} 
                        onChange={(event)=>this.inputChangedHandler(event, "phone")} />
                        <label 
                        style={{marginTop: '20px'}}
                        className={!this.state.logInForm.password.valid && this.state.logInForm.password.touched ? labelInvalidStyle : null }
                        >
                            {t('order.logIn.password')}
                        </label>
                        <input 
                        type="password" 
                        className={!this.state.logInForm.password.valid && this.state.logInForm.password.touched ? inputInvalidStyle : null }
                        placeholder={t('order.logIn.enterPassword')}
                        value={this.state.logInForm.password.value} 
                        onChange={(event)=>this.inputChangedHandler(event, "password")} />

                        <p className="log-in-block__error">{this.state.error}</p>

                        <button 
                        disabled={! this.state.formIsValid} className={!this.state.formIsValid ? disabledButtonStyle : null}
                        onClick={this.onSubmitFormHandler}>
                            {t('button.logIn')}
                        </button>
                    </div>
                    <p onClick={this.props.switchMode}>{t('order.logIn.dontHaveAccount')}</p>
                    <p onClick={this.props.restoreMode}>{t('order.logIn.forgotPassword')}</p>
                </div>
            </>
            )}
            </>
        );    
    }
};

export default withTranslation()(LogInBlock);