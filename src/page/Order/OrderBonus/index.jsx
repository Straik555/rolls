import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import store from 'store';

import OrderPageWrapper from "../components/OrderPageWrapper";
import Spinner from '../../../components/Spinner/index';
import bonus from '../../../assets/page/Order/bonus.svg';
import {bonusInformation} from './list';

const OrderBonus = (props) => {

    const [ loading, setLoading ] = useState(true);
    const [ bonusAmount, setBonusAmount ] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3000/user/', {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
        })
            .then(res => {
                const bonusAmount = res.data.user.sumUserBonus;
                setBonusAmount(bonusAmount);
            })
            .catch(error => {
                console.log(error);
                console.log(error.response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const {t} = useTranslation()
    return(
        <>
        {loading 
        ?
        (
            <Spinner />
        )
        :
        (
            <OrderPageWrapper 
            title={t('order.bonusAccount.title')}
            bonusAmount={bonusAmount}>
            <div
                itemProp={'orderBonus'}
                itemScope
                className={'order_bonus'}
            >
                <div
                    className={'order_bonus_img'}
                    itemProp={'orderBonusImg'}
                    itemScope
                >
                    <img
                        itemProp={'img'}
                        itemType={'url'}
                        src={bonus}
                        alt=""
                    />
                </div>
                <div
                    itemProp={'orderBonusPercents'}
                    itemScope
                    className={'order_bonus_percents'}>
                    <div
                        itemProp={'orderBonusPercentsList'}
                        className={'list'}
                    >
                        <li
                            itemProp={'orderBonusPercentsListLi'}
                            className={'active'}
                        >
                            5%
                        </li>
                        <li
                            itemProp={'orderBonusPercentsListLi'}
                            className={'center'}
                        >
                            7%
                        </li>
                        <li itemProp={'orderBonusPercentsListLi'}>
                            10%
                        </li>
                    </div>
                </div>
                <div
                    itemProp={'orderBonusInformtion'}
                    itemScope
                    className={'order_bonus_information'}>
                    <p itemProp={'orderBonusInformtionText'}>
                        {t('order.bonusAccount.youOrdered')} <b>{bonusAmount} грн.</b>  {t('order.bonusAccount.left')} <b>5 000 грн.</b> {t('order.bonusAccount.levelOfBonuses')}
                    </p>
                    <h1 itemProp={'orderBonusInformtionName'}>
                        {t('order.bonusAccount.bonusProgram')}
                    </h1>
                    {
                        bonusInformation.map(el =>
                            <li
                                itemProp={'orderBonusInformtionList'}
                                key={el.id}
                            >
                                {t(`${el.text}`)}
                            </li>
                        )
                    }
                </div>
            </div>
        </OrderPageWrapper>
        )
        }
        </>
    )
}
export default OrderBonus;