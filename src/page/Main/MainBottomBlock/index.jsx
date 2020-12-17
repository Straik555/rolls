import React from 'react';
import { useTranslation } from 'react-i18next';

import image from '../../../assets/page/Main/MainBottomBlock/one.svg';
import './index.scss';

const MainBottomBlock = () => {
    const {t} = useTranslation();
    return (
        <div className={'main-bottom-block'}>
            <div className={'main-bottom-block_header'}>
                <img src={image} alt="24ROLLS"/>
            </div>
            <div className={'main-bottom-block_content'}>
                <div className={'left'}>
                    <p>
                        {t('main.bottomBlock.left.1')}<br/>
                        {t('main.bottomBlock.left.2')}
                    </p>
                    <p>
                        {t('main.bottomBlock.left.3')}
                    </p>
                    <p>
                        {t('main.bottomBlock.left.4')}
                    </p>
                </div>
                <div className={'right'}>
                    <p>
                        {t('main.bottomBlock.right.1')}
                    </p>
                    <p>
                        {t('main.bottomBlock.right.2')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MainBottomBlock;