import React from 'react';

import minus from '../../../assets/components/ConstructorSlider/minus.svg';
import plus from '../../../assets/components/ConstructorSlider/plus.svg';
import del from '../../../assets/components/ConstructorSlider/del.svg';
import {useCustomStore} from "../../../context/useStore";
import {ACTIONS} from "../../../context/providerContext";

const LeftSlider = ({slider}) => {
    const {state, dispatch} = useCustomStore();
    return (
            <li className={'content_list'}>
                    <div className={'left-content'}>
                        <span>{slider.title}</span>
                    </div>
                    <div className={'right-content'}>
                        <div className={'right-content_first'}>
                            <span>{slider.weight} гр</span>
                            <amp-img
                                itemType={'url'}
                                itemProp={'imgMinus'}
                                src={minus}
                                alt="minus"
                                width={'24'}
                                height={'24'}
                                onClick={() => dispatch({type: ACTIONS.REMOVE_TO_BASKET_YOUR_SET, payload: slider.id})}
                            >
                            </amp-img>
                            <span>
                                {
                                    state.yourSet.basketYourSet!== undefined &&
                                    state.yourSet.basketYourSet.find(el => el.id === slider.id) ?
                                        state.yourSet.basketYourSet.map(el => {
                                            if(el.id === slider.id){
                                                return el.countBasket
                                            }
                                        }) : slider.count
                                }
                            </span>
                            <amp-img
                                itemType={'url'}
                                itemProp={'imgPlus'}
                                src={plus}
                                alt="plus"
                                width={'24'}
                                height={'24'}
                                style={{marginTop: '3px'}}
                                onClick={() => dispatch({type: ACTIONS.ADD_TO_BASKET_YOUR_SET, payload: slider})}
                            >
                            </amp-img>
                        </div>
                        <div className="right-content_last">
                            <span>{slider.price} грн</span>
                            <amp-img
                                itemType={'url'}
                                itemProp={'imgDel'}
                                src={del}
                                alt="img"
                                width={'28'}
                                height={'28'}
                                onClick={() => dispatch({type: ACTIONS.DELETE_TO_BASKET_YOUR_SET_ALL, payload: slider.id})}
                            >
                            </amp-img>
                        </div>
                    </div>
                </li>
    )
}

export default LeftSlider;