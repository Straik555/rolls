import React from "react";
import { useTranslation } from 'react-i18next';

import './index.scss';
import Basket from '../Basket';
import LeftSlider from './LeftSlider';
import {constructorSliderList} from './list';
import {useCustomStore} from "../../context/useStore";
import * as R from "ramda";

const ConstructorSlider = ({sliders = constructorSliderList}) => {
    const {state} = useCustomStore();
    const {t} = useTranslation();
    const totalPrice = state.yourSet.basketYourSet ? R.compose(
        R.sum,
        R.pluck('priceAll')
    )(state.yourSet.basketYourSet) : 0;
    const totalWeight = state.yourSet.basketYourSet ? R.compose(
        R.sum,
        R.pluck('weightAll')
    )(state.yourSet.basketYourSet) : 0;
    const totalCountBasket = state.yourSet.basketYourSet ? R.compose(
        R.sum,
        R.pluck('countBasket')
    )(state.yourSet.basketYourSet) : 0;
    return (
        <div className="constructor-slider">
            <div className="content">
                <div className="content_left">
                </div>
                <div className="content_right">
                    <h4>{t('components.constructorSlider.title')}</h4>
                    <ul className={'content'}>
                        {
                            sliders.map((slider, idx) =>
                                <LeftSlider slider={slider} key={idx} />
                            )
                        }
                    </ul>
                </div>
            </div>
            <div className="text">
                <span>{t('components.constructorSlider.text')}</span>
                <p>
                    {totalPrice}грн / {totalWeight}гр   /   {totalCountBasket}шт</p>
                <Basket style={false} title={'button.inBasket'} />
            </div>
        </div>
    );
}

export default ConstructorSlider;