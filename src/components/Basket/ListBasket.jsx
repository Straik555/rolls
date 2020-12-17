import React from 'react';

import min from "../../assets/page/Rolls/min.svg";
import max from "../../assets/page/Rolls/max.svg";
import { ACTIONS} from '../../context/providerContext';
import {useCustomStore} from "../../context/useStore";

const ListBasket = ({list}) => {
    const {dispatch} = useCustomStore();
    return (
        <li
            itemProp={'modalList'}
        >
            <div className={'left'}>
                <div className={'title-image'}>
                    <img
                        itemProp={'img'}
                        itemType={'url'}
                        src={`http://localhost:3000/${list.image}`}
                        alt={list.title}
                    />
                </div>
                <div
                    itemProp={'ContentLeft'}
                    className={'left_text'}
                >
                    <h1 itemProp={'ContentTitle'}>{list.name}</h1>
                    <p itemProp={'ContentDescription'}>{list.category}</p>
                </div>
            </div>
            <div className={'right'}>
                <div
                    itemProp={'ContentRight'}
                    className={'right_text'}
                >
                    <amp-img
                        itemProp={'imgMin'}
                        itemType={'url'}
                        src={min}
                        alt={'-'}
                        width={'12'}
                        height={'62'}
                        onClick={() => dispatch({type: ACTIONS.REMOVE_TO_BASKET_YOUR_SET, payload: list.id})}
                    >
                    </amp-img>
                    <span itemProp={'countBasket'}>
                        <p>
                            {
                                list.countBasket
                            }
                        </p>
                    </span>
                    <amp-img
                        itemProp={'imgMax'}
                        itemType={'url'}
                        src={max}
                        alt={'+'}
                        width={'12'}
                        height={'62'}
                        onClick={() => dispatch({type: ACTIONS.ADD_TO_BASKET, payload: list})}
                    >
                    </amp-img>
                </div>
                <div
                    itemProp={'ContentPrice'}
                    className={'price'}
                >
                <span itemProp={'price'}>
                    {list.price} грн.
                </span>
                </div>
            </div>
        </li>
    )
}

export default ListBasket;