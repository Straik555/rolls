import React from 'react';
import Truncate from 'react-truncate';
import {Link} from "react-router-dom";

import './index.scss';
import min from "../../assets/page/Rolls/min.svg";
import max from "../../assets/page/Rolls/max.svg";
import Basket from '../Basket';
import { ACTIONS} from '../../context/providerContext';
import {useCustomStore} from "../../context/useStore";
import ErrorBoundary from "../ErrorBoundary";

const CustomFoodBlock = ({food, style, margin}) => {
    const {state, dispatch} = useCustomStore();
    return (
        <ErrorBoundary>
            <div
                itemProp={'customFoodBlock'}
                itemScope
                className={'container'}
                style={{marginBottom: margin}}
            >
                <div
                    itemProp={'containerList'}
                    className={!style ? 'container_block' :'container_list'}
                >
                    <div
                        itemProp={'listHeader'}
                        itemScope
                        className={'list_header'}
                    >
                        <img
                            itemProp={'img'}
                            itemType={'url'}
                            src={`http://localhost:3000/${food.image}`}
                            alt={food.name}
                        >
                        </img>
                    </div>
                    <div
                        itemProp={'listFooter'}
                        itemScope
                        className={'list_footer'}
                    >
                        <div
                            itemProp={'headerFooter'}
                            itemScope
                            className={'header'}
                        >
                            <Link
                                itemProp={'headerFooterTitle'}
                                to={`/cart/${food._id}`}
                                onClick={() => dispatch({type: ACTIONS.ADD_TO_PRODUCT, payload: food})}
                            >
                                <h1>
                                    {food.name}
                                </h1>
                            </Link>
                            <Truncate
                                lines={4}
                                ellipsis={<span>...</span>}
                            >
                                <span itemProp={'headerFooterText'}> {food.description}</span>
                            </Truncate>
                        </div>
                        <div
                            itemProp={'centerFooter'}
                            itemScope
                            className={'center'}
                        >
                            <h1 itemProp={'centerFooterPrice'}>{food.price} грн.</h1>
                            <span>
                                <p itemProp={'weight'}>{food.weight} г.</p>
                                <p>{food.pieces &&  `${food.pieces} шт.`}</p>
                            </span>
                        </div>
                        <div
                            itemProp={'footerBlock'}
                            itemScope
                            className={'footer'}>
                            <div
                                itemProp={'footerBlockLeft'}
                                className={'footer_left'}>
                                <amp-img
                                    itemProp={'imgMin'}
                                    itemType={'url'}
                                    src={min}
                                    alt={'-'}
                                    onClick={() => dispatch({type: ACTIONS.REMOVE_TO_BASKET, payload: food._id})}
                                    width={'12'}
                                    height={'62'}
                                >
                                </amp-img>
                                <span itemProp={'countBasket'}>
                                            <p>{
                                                state.cart.basket!== undefined &&
                                                state.cart.basket.find(el => el.id === food._id) ?
                                                    state.cart.basket.map(el => {
                                                        if(el.id === food._id){
                                                            return el.countBasket
                                                        }
                                                    }) : 1
                                            }</p>
                                        </span>
                                <amp-img
                                    itemType={'imgMax'}
                                    itemScope
                                    src={max}
                                    alt={'+'}
                                    onClick={() =>  dispatch({type: ACTIONS.ADD_TO_BASKET, payload: food})}
                                    width={'12'}
                                    height={'62'}
                                >
                                </amp-img>
                            </div>
                            <Basket style={true} title={'button.basket'} />
                        </div>
                    </div>
                </div>
            </div>

        </ErrorBoundary>

    )
}

export default CustomFoodBlock;