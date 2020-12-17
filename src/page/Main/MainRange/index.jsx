import React from 'react';
import {useTranslation} from "react-i18next";

import './index.scss';

const MainRange = () => {
    const {t} = useTranslation();
    return (
        <div className={'main-range'}>
            <div className={'main-range_left'}>
                <h1>
                    {t('main.range.title.1')}
                </h1>
                <p>
                    {t('main.range.description.1')}
                </p>
            </div>
            <div className={'main-range_center'}>
                    <h1>
                        {t('main.range.title.2')}
                    </h1>
                    <p>
                        {t('main.range.description.2')}
                    </p>
            </div>
            <div className={'main-range_right'}>
                <div className={'wok'}>
                    <h1>WOK</h1>
                    <p>
                        {t('main.range.description.3')}
                    </p>
                </div>
                <div className={'drink'}>
                    <h1>
                        {t('main.range.title.3')}
                    </h1>
                    <p>
                        {t('main.range.description.4')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainRange;