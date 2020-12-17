import React from 'react';
import {useTranslation} from "react-i18next";
import Truncate from 'react-truncate';

import {whyUs} from "../list";
import './index.scss';

const MainWhyUs = ({why = whyUs}) => {
    const {t} = useTranslation();
    return (
        <div className={'main-why-us'}>
            {
                why.map(el =>
                    <div
                        className={'list'}
                        key={el.id}
                    >
                        <div className={'list_left'}>
                            <img src={el.image} alt=""/>
                        </div>
                        <div className={'list_right'}>
                            <h1>{t(`${el.title}`)}</h1>
                            <span style={{width: el.width}}>{t(`${el.description}`)}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MainWhyUs;