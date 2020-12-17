import React, {useState, useEffect } from 'react';
import axios from 'axios';
import store from 'store';
import { useTranslation } from 'react-i18next';

import Modal from '../../../components/UI/Modal/Modal';
import Spinner from '../../../components/Spinner/index';
import OrderPageWrapper from "../components/OrderPageWrapper";

import { checkValidaty } from '../../../tools/checkValidaty';

const OrderPersonal = (props) => {

    const {t} = useTranslation();

    const [ userInfo, setUserInfo ] = useState({ 
        name: '', 
        dateBirth: '', 
        email: '', 
        phone: '', 
        bonusAmount: ''
    });

    const [ formIsValid, setFormValid ] = useState(false);

    const [loading, setLoading] = useState(true);
    // when user successfully logged up
    const [ emailSuccessModal, setEmailSuccessModal ] = useState(false);
    // when user successfully recover password
    const [ RecoverPasswordSuccess, setRecoverPasswordSuccess ] = useState(false);
    // when user successfully changed infromation
    const [ ChangeInfoSuccess, setChangeInfoSuccess ] = useState(false);

    useEffect(() => {

        if ( props.location.search === '?signup=true' ) {
            setEmailSuccessModal(true);
        } else if ( props.location.search === '?recover-pass=true' ) {
            setRecoverPasswordSuccess(true);
        }

    }, [props]);

    useEffect(() => {
        axios.get('http://localhost:3000/user/', {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
        })
            .then(res => {
                const updatedUserInfo = {
                    name: res.data.user.name ? res.data.user.name : '',
                    dateBirth: res.data.user.birthday ? res.data.user.birthday.slice(0, 10) : '',
                    email: res.data.user.email,
                    phone: res.data.user.phoneNumber,
                    bonusAmount: res.data.user.sumUserBonus
                };
                setUserInfo(updatedUserInfo);
            })
            .catch(err => {
                console.log(err, err.response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const onCloseEmailModalHandler = () => {
        setEmailSuccessModal(false);
        props.history.push('/order/personal');
    }

    const onModalRecoverPasswordClosed = () => {
        setRecoverPasswordSuccess(false);
        props.history.push('/order/personal');
    }

    const onModalChangeInfoClosed = () => {
        setChangeInfoSuccess(false);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const name = userInfo.name;
        const email = userInfo.email;
        const birthday = userInfo.dateBirth;
        axios.post('http://localhost:3000/user/post/info', {
            name: name,
            email: email,
            birthday: birthday
        }, {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
        })
            .then(res => {
                console.log(res, res.data)
                setChangeInfoSuccess(true);
            })
            .catch(err => console.log(err, err.response))
            .finally(() => setFormValid(false));
    }

    return (
        <>
        {loading 
        ? 
        (
            <Spinner />
        )
        :
        (
            <OrderPageWrapper 
            title={t('order.personalData.title')}
            bonusAmount={userInfo.bonusAmount}>
            <div
                itemProp={'orderPersonal'}
                itemScope
                className={'order_personal'}
            >
                <div
                    itemProp={'orderPersonalForm'}
                    itemScope
                    className={'order_personal_form'}>
                    <form>
                        <fieldset>
                            <label itemProp={'orderPersonalFormName'}>{t('order.personalData.name')}</label>
                            <input
                                itemProp={'orderPersonalFormInput'}
                                itemType={'text'}
                                type="text"
                                value={userInfo.name}
                                onChange={event => {
                                    setUserInfo({
                                        ...userInfo,
                                        name: event.target.value
                                    })
                                    setFormValid(true);
                                }
                                }
                            />
                        </fieldset>
                        <fieldset>
                            <label itemProp={'orderPersonalFormDate'}>{t('order.personalData.birthDate')}</label>
                            <input
                                itemProp={'orderPersonalFormInput'}
                                itemType={'text'}
                                type="date"
                                value={userInfo.dateBirth}
                                onChange={event => {
                                    setUserInfo({
                                        ...userInfo,
                                        dateBirth: event.target.value
                                    });
                                    setFormValid(true);
                                }
                                }
                                pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                            />
                        </fieldset>
                        <fieldset>
                            <label itemProp={'orderPersonalFormEmail'}>{t('order.personalData.email')}</label>
                            <input
                                itemProp={'orderPersonalFormInput'}
                                itemType={'email'}
                                value={userInfo.email}
                                type="email"
                                onChange={event => {
                                    setUserInfo({
                                        ...userInfo,
                                        email: event.target.value
                                    });
                                    const emailIsValid = checkValidaty(event.target.value, {
                                        required: true,
                                        isEmail: true
                                    });
                                    setFormValid(emailIsValid);
                                }
                                }
                            />
                        </fieldset>

                        <input
                            itemProp={'orderPersonalFormInputSubmit'}
                            itemType={'submit'}
                            type={'submit'}
                            disabled={!formIsValid}
                            onClick={(event) => onSubmitForm(event)}
                            className={formIsValid ? 'button' : 'button button-disabled-style'}
                            value={t('button.saveChanges')}
                        />
                    </form>

                </div>
                <div
                    itemProp={'orderPersonalInformation'}
                    itemScope
                    className={'order_personal_information'}>
                    <h1 itemProp={'orderPersonalInformationName'}>
                        {userInfo.phone}
                    </h1>
                    <p itemProp={'orderPersonalInformationText'}>
                        {t('order.personalData.changeYourPhone')} 0432 572 572 | 067 9 572-572 | 066 9 572-572 | 093 9 572-572
                    </p>
                    <div
                        itemProp={'orderPersonalInformationCheckbox'}
                        className={'checkbox'}
                    >
                        <input
                            itemProp={'orderPersonalInformationCheckboxInput'}
                            itemType={'checkbox'}
                            type="checkbox"
                            name={'checkboxSms'}
                            id={'checkboxSms'}
                        />
                        <label
                            itemProp={'orderPersonalInformationCheckboxLabel'}
                            htmlFor={'checkboxSms'}
                        >
                            {t('order.personalData.sms')}
                        </label>
                    </div>
                    <div
                        itemProp={'orderPersonalInformationCheckbox'}
                        className={'checkbox'}
                    >
                        <input
                            itemProp={'orderPersonalInformationCheckbox'}
                            itemType={'checkbox'}
                            type="checkbox"
                            name={'checkboxEmail'}
                            id={'checkboxEmail'}
                        />
                        <label
                            itemProp={'orderPersonalInformationCheckboxLabel'}
                            htmlFor={'checkboxEmail'}
                        >
                            {t('order.personalData.receiveEmail')}
                        </label>
                    </div>
                </div>
            </div>

            {/* modal for succesfull log up  */}
            <Modal
            show={emailSuccessModal}
            modalClosed={onCloseEmailModalHandler}>
                <p style={{
                    color: 'green',
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: '24px'
                }}>{t('order.personalData.successfully')}</p>
            </Modal>

            {/* modal for succesfull changed password  */}
            <Modal
            show={RecoverPasswordSuccess}
            modalClosed={onModalRecoverPasswordClosed}>
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
            
            {/* modal for succesfull changed user information  */}
            <Modal
            show={ChangeInfoSuccess}
            modalClosed={onModalChangeInfoClosed}>
                <div style={{textAlign: 'center'}}>
                    <p style={{
                        color: 'green',
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: '24px'
                    }}>
                        {'Вы успешно сменили личные данные!'}
                    </p>
                </div>
            </Modal>
        </OrderPageWrapper>
        ) }
        </>
    )
}

export default OrderPersonal;