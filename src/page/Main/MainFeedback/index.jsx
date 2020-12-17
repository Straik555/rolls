import React from 'react';
import {useTranslation} from "react-i18next";

import defaultFeedback from '../../../assets/page/Main/MainFeedback/a7ce77bad9f51ab5662aa084ceeaa917.png';
import {mainFeedback} from "../list";
import vector from '../../../assets/page/Main/MainFeedback/vector.svg';
import stars from '../../../assets/page/Blog/appraisal.svg';
import './index.scss';

const MainFeedback = () => {
    const {t} = useTranslation();
    return (
        <div className={'main-feedback'}>
            <div className={'main-feedback_header'}>
                <h1>
                    {t('main.feedback.title')}
                </h1>
            </div>
            <div className={'main-feedback_container'}>
                {
                    mainFeedback.map(el =>
                        <div
                            key={el.id}
                            className={'list'}
                        >
                            <div
                                className={'list_description'}
                                style={{backgroundImage: `url(${vector})`, backgroundRepeat: 'no-repeat'}}
                            >
                                <p>{el.description}</p>
                            </div>
                            <div className={'list_bottom'}>
                                <div className={'left'}>
                                    <img src={!el.image ? defaultFeedback : el.image} alt=""/>
                                </div>
                                <div className={'right'}>
                                    <img src={stars} alt=""/>
                                    <h1>{el.name}</h1>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default MainFeedback;