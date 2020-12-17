import React, {Fragment} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";

import swip from '../../../assets/page/Main/swip.svg';
import {mainSliderList} from '../list';
import './index.scss';
import {useCustomStore} from "../../../context/useStore";
import {ACTIONS} from "../../../context/providerContext";

const MainSlider = ({list = mainSliderList}) => {
    const {dispatch} = useCustomStore();
    const {t} = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className={'main-slider'}>
            <Slider {...settings}
                className={'slider-block'}
            >
                {
                    list.map((el, idx) =>
                   <Fragment key={idx}>
                       <div

                           className={'list'}
                       >
                           <div className={'list_left'}>
                               <div className={'absolute'}>
                                   <h1>
                                       {el.title}
                                   </h1>
                                   <h1>
                                       {el.titles}
                                   </h1>
                                   <p>
                                       {el.count} шт. Вес {el.weight} г.
                                   </p>
                                   <span>
                                    {el.text}
                                </span>
                                   <div className={'absolute_footer'}>
                                       <button
                                           onClick={() => dispatch({type: ACTIONS.ADD_TO_BASKET, payload: el})}
                                       >
                                           {t('button.toOrder')}
                                       </button>
                                       <div className={'right'}>
                                           <h1>{el.price} грн.</h1>
                                           <span>{el.lastPrice} грн.</span>
                                       </div>
                                   </div>

                               </div>
                           </div>
                           <div className={'list_right'}>
                               <img src={el.image} alt=""/>
                           </div>
                       </div>
                        <span className="dots">
                        <img src={swip} alt=""/> 0{el.id}
                        </span>
                   </Fragment>
                        )

                }
            </Slider>
        </div>
    );
}

export default MainSlider;