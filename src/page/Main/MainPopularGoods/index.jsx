import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from 'react-router-dom';

import './index.scss';
import {setsList} from "../../Sets/list";
import min from "../../../assets/page/Rolls/min.svg";
import max from "../../../assets/page/Rolls/max.svg";
import Basket from "../../../components/Basket";
import appraisal from '../../../assets/page/Blog/appraisal.svg';
import {useCustomStore} from "../../../context/useStore";
import {ACTIONS} from "../../../context/providerContext";

const MainPopularGoods = ({list = setsList}) => {
    const {state, dispatch} = useCustomStore();
    const {t} = useTranslation();
    return (
        <div className={'popular-goods'}>
            <div className={'popular-goods_container'}>
                {
                    list.map(el => el.imageBottom ? null :
                        <div
                            itemProp={'listBlock'}
                            itemScope
                            key={el.id}
                            className={'list'}
                        >
                            <div
                                itemProp={'ContentBlock'}
                                itemScope
                                className={'list_content'}
                            >
                                <div
                                    itemProp={'leftBlock'}
                                    itemScope
                                    className={'left'}
                                >
                                    <amp-img
                                        itemType={'url'}
                                        itemProp={'imageTitle'}
                                        src={el.image}
                                        alt={el.title}
                                        width={'165'}
                                        height={'165'}
                                    ></amp-img>
                                </div>
                                <div
                                    itemProp={'rightBlock'}
                                    itemScope
                                    className={'right'}
                                >
                                    <amp-img
                                        itemType={'url'}
                                        itemProp={'img'}
                                        src={appraisal}
                                        alt="Оценка"
                                        width={'180'}
                                        height={'25'}
                                        style={{marginLeft: '-10px'}}
                                    ></amp-img>
                                    <Link
                                        to={`/cart/${el.id}`}
                                        onClick={() => dispatch({type: ACTIONS.ADD_TO_PRODUCT, payload: el})}
                                    >
                                        <h1>{el.title}</h1>
                                    </Link>
                                    <h2>{el.price} грн.</h2>
                                    <p>{el.weight} г.  ({el.count} шт.)</p>
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
                                                width={'12'}
                                                height={'62'}
                                                onClick={() => dispatch({type: ACTIONS.REMOVE_TO_BASKET, payload: el.id})}
                                            >
                                            </amp-img>
                                            <span itemProp={'countBasket'}>
                                                <p>
                                                    {
                                                        state.cart.basket !== undefined &&
                                                        state.cart.basket.find(element => element.id === el.id) ?
                                                            state.cart.basket.map(element => {
                                                                if(element.id === el.id){
                                                                    return element.countBasket
                                                                }
                                                            }) : el.countBasket
                                                    }
                                                </p>
                                            </span>
                                            <amp-img
                                                itemType={'imgMax'}
                                                itemProp={'imgMax'}
                                                src={max}
                                                alt={'+'}
                                                width={'12'}
                                                height={'62'}
                                                onClick={() => dispatch({type: ACTIONS.ADD_TO_BASKET, payload: el})}
                                            >
                                            </amp-img>
                                        </div>
                                        <Basket style={true} title={'button.basket'} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={'popular-goods_footer'}>
                <button>
                    <Link to={'/'}>
                        {t('button.more')}
                    </Link>
                </button>
            </div>
        </div>
    )
}
export default MainPopularGoods;