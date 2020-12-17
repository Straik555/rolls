import React from 'react';

import HeaderBlock from "./HeaderBlock";
import SetsSlider from '../../components/SetsSlider'
import './index.scss'
import {useCustomStore} from "../../context/useStore";
import {constructorSliderList} from "../../components/ConstructorSlider/list";

const CardProduct = () => {
    const {state} = useCustomStore();
    return (
        <div
            itemProp={'cardProduct'}
            itemScope
            className={'card-product'}
        >
            <HeaderBlock food={state.product[0]} />
            <SetsSlider list={constructorSliderList} title={true} />
        </div>
    )
}

export default CardProduct;