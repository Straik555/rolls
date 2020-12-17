import React from 'react';
import { useTranslation } from 'react-i18next';

import avatar from '../../../assets/page/Order/default-avatar.png';

const OrderHistoryFooter = ({footer}) => {
    const {t} = useTranslation()
    return (
        <div
            itemProp={'orderHistoryFooter'}
            itemScope
            className={'order_history_footer'}
        >
            {
                footer.map((orders, index) =>
                    <div
                        itemProp={'orderHistoryFooterList'}
                        key={index}
                        className={'order_history_footer_list'}
                    >
                        <div
                            itemProp={'orderHistoryFooterContent'}
                            itemScope
                            className={'content'}
                        >
                            <div
                                itemProp={'orderHistoryFooterContentHeader'}
                                className={'content_header'}
                            >
                                <div
                                    itemProp={'orderHistoryFooterContentHeaderLeft'}
                                    itemScope
                                    className={'content_header_left'}>
                                    <h1 itemProp={'name'}>{t('order.historyOrders.order')}</h1>
                                    <h1 itemProp={'name'}>{orders.id}</h1>
                                    <span itemProp={'type'}>{orders.status}</span>
                                </div>
                                <div
                                    itemProp={'orderHistoryFooterContentHeaderRight'}
                                    itemScope
                                    className={'content_header_right'}>
                                    <img
                                        itemProp={'img'}
                                        itemType={'url'}
                                        src={avatar}
                                        alt=""
                                    />
                                    <p itemProp={'text'}>{orders.name}</p>
                                    <span itemProp={'date'}>
                                        {
                                        orders.date.slice(-2) + 
                                        '.' + orders.date.slice(5, 7) + 
                                        '.' + orders.date.slice(0, 4)
                                        }
                                        </span>
                                    <span itemProp={'time'}>{orders.time}</span>
                                </div>
                            </div>
                            <div
                                itemProp={'orderHistoryFooterContentBody'}
                                className={'content_body'}
                            >
                                {
                                    orders.order.map((el, id) =>
                                        <li
                                            itemProp={'orderHistoryFooterContentBodyList'}
                                            itemScope
                                            key={id}
                                            className={'content_body_block'}
                                        >
                                            <div
                                                itemProp={'orderHistoryFooterContentBodyListLeft'}
                                                className={'left'}
                                            >
                                                <p itemProp={'text'}>{el.name}</p>
                                            </div>
                                            <div
                                                itemProp={'orderHistoryFooterContentBodyRight'}
                                                className={'right'}
                                            >
                                                <span itemProp={'count'}>{el.count}x{el.price} грн.</span>
                                                <span itemProp={'price'}>{el.count * el.price} грн.</span>
                                            </div>
                                        </li>
                                    )
                                }
                            </div>
                            <div
                                itemProp={'orderHistoryFooterContentFooter'}
                                className={'content_footer'}
                            >
                                <h2 itemProp={'sumOrderPrice'}>{t('order.historyOrders.orderPrice')}</h2>
                                <h1 itemProp={'price'}>{orders.price} грн.</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default OrderHistoryFooter;