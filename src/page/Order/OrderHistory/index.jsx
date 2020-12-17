import React, { useState, useEffect } from 'react';
import axios from 'axios';
import store from 'store';
import { useTranslation } from 'react-i18next';

import OrderPageWrapper from "../components/OrderPageWrapper";
import Spinner from '../../../components/Spinner/index';

const OrderHistory = () => {

    const [ loading, setLoading ] = useState(true);
    const [ bonusAmount, setBonusAmount ] = useState(0);
    const [ orders, setOrders ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/user/', {
            headers: {
                'Authorization': `Bearer ${store.get('24rolls').user.token}`
            }
        })
            .then(res => {
                const bonusAmount = res.data.user.sumUserBonus;
                const orders = res.data.ordersUser;
                const newOrders = orders.map((el, index) => ({
                    id: index, // fix it to number order
                    name: el.user.name,
                    date: el.date.slice(0, 10),
                    time: el.date.slice(11),
                    status: el.status,
                    price: el.price,
                    order: el.products.map((product, index) => ({
                        id: index,
                        name: product.productData.name,
                        price: product.productData.price,
                        count: product.quantity
                    }))
                }));
                setBonusAmount(bonusAmount);
                setOrders(newOrders);
            })
            .catch(err => {
                console.log(err, err.response);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const {t} = useTranslation()
    return (
        <>
        {loading ?
        (
            <Spinner />
        ) : 
        (
         <OrderPageWrapper
            title={t('order.historyOrders.title')}
            bonusAmount={bonusAmount}
            orderFooter={orders}
         >
            {
            !orders && 
            <div
                itemProp={'orderHistory'}
                itemScope
                className={'order_history'}
            >
                <p itemProp={'orderHistoryText'}>{t('order.historyOrders.notAnyOrders')}</p>
            </div>
            }
        </OrderPageWrapper>
        )}
        </>
    )
}

export default OrderHistory;