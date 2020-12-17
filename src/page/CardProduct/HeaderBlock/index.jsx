import React, {useState} from 'react';
import Truncate from "react-truncate";
import PhoneInput from 'react-phone-input-2';
import { useTranslation } from 'react-i18next';
import {object} from "prop-types";

import './index.scss';
import min from "../../../assets/page/Rolls/min.svg";
import max from "../../../assets/page/Rolls/max.svg";
import {ACTIONS} from "../../../context/providerContext";
import {useCustomStore} from "../../../context/useStore";
import Basket from "../../../components/Basket";

const HeaderBlock = ({food}) => {
    const {state, dispatch} = useCustomStore();
    const {t} = useTranslation();
    const [phone, setPhone] = useState('')
    const handleOnChange = (e) => {
        setPhone(e)
    }
    return (
        <div
            itemProp={'headerSlider'}
            itemScope
            className={'header-slider'}
            key={food._id}
        >
            <div
                itemProp={'listBlock'}
                itemScope
                className={'header-slider_list-block'}
            >
                <div
                    itemProp={'listContent'}
                    itemScope
                    className={'list-content'}
                >
                    <div
                        itemProp={'listContentHeader'}
                        className={'list-content_header'}
                    >
                        <h1 itemProp={'name'}>{food.name}</h1>
                        <p itemProp={'count'}>({food.pieces} шт.) Вес {food.weight} г. </p>
                        <Truncate
                            lines={4}
                            ellipsis={<span>...</span>}
                        >
                            <span itemProp={'text'}> {food.description}</span>
                        </Truncate>
                    </div>
                    <div
                        itemProp={'listContentCenter'}
                        className={'list-content_center'}>
                        <amp-img
                            itemProp={'img'}
                            itemType={'url'}
                            src={min}
                            alt={'-'}
                            onClick={() => dispatch({type: ACTIONS.REMOVE_TO_BASKET, payload: food._id})}
                            width={'12'}
                            height={'62'}
                        >
                        </amp-img>
                        <span itemProp={'countBasket'}>
                                <p>
                                    {
                                        state.cart.basket!== undefined &&
                                        state.cart.basket.find(el => el.id === food._id) ?
                                            state.cart.basket.map(el => {
                                                if(el.id === food._id){
                                                    return el.countBasket
                                                }
                                            }) : 1
                                    }
                                </p>
                            </span>
                        <amp-img
                            itemProp={'img'}
                            itemType={'url'}
                            src={max}
                            alt={'+'}
                            onClick={() =>  dispatch({type: ACTIONS.ADD_TO_BASKET, payload: food})}
                            width={'12'}
                            height={'62'}
                        >
                        </amp-img>
                    </div>
                    <div
                        itemProp={'listContentFooter'}
                        className={'list-content_footer'}
                    >
                        <div
                            itemProp={'price'}
                            className={'price'}
                        >
                            <h1 itemProp={'namePrice'}>{food.price} грн.</h1>
                            {
                                food.defaultPrice && <p itemProp={'nameDefaultPrice'}>{food.defaultPrice} грн.</p>
                            }
                        </div>
                        <Basket title={'button.toOrder'} />
                        <div
                            itemProp={'phone-input'}
                            className={'phone-input'}
                        >
                            <PhoneInput
                                country={'ua'}
                                inputExtraProps={{
                                    name: "phone",
                                    required: true,
                                    autoFocus: true
                                }}
                                value={phone}
                                onChange={e => handleOnChange(e)}
                            />
                            <button
                                itemProp={'priceButton'}
                                className={'price-button'}
                            >{t('button.orderInClick')}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                itemProp={'imageBlock'}
                itemScope
                className={'header-slider_image-block'}
            >
                <amp-img
                    itemProp={'img'}
                    itemType={'url'}
                    src={`http://localhost:3000/${food.image}`}
                    alt={food.name}
                    width={'560'}
                    height={'360'}
                >
                </amp-img>
            </div>
        </div>
    )
}

HeaderBlock.propTypes = {
    food: object.isRequired
}

export default HeaderBlock;