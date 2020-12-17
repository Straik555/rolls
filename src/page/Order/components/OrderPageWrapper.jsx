import React from "react";

import CustomPageWrapper from './CustomPageWrapper';
import LeftBlockOrder from "./LeftBlockOrder";
import OrderHistoryFooter from "./OrderHistoryFooter";

const OrderPageWrapper = ({children, title, orderFooter, bonusAmount}) => (
        <div
            itemProp={'orderPageWrapper'}
            itemScope
            className={'order_page_wrapper'}
        >
            <div
                itemProp={'orderPageWrapperTitle'}
                className={'order_title'}
            >
                <h1 itemProp={'name'}>
                    {title}
                </h1>
            </div>
            <div
                itemProp={'orderPageWrapperContainer'}
                className={'order_container'}
            >
                <LeftBlockOrder 
                bonusAmount={bonusAmount}/>
                <CustomPageWrapper>
                    {children}
                </CustomPageWrapper>
            </div>
            {
                orderFooter && <OrderHistoryFooter footer={orderFooter}/>

            }
        </div>
)

export default OrderPageWrapper;