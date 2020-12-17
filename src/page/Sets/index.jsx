import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';

import HeadingBlock from '../../components/HeadingBlock';
import CustomFoodBlock from '../../components/CustomFoodBlock';
import ConstructorSlider from "../../components/ConstructorSlider";
import SetsSlider from '../../components/SetsSlider';
import Spinner from "../../components/Spinner";
import ImageWrapper from "../../components/ImagesWrapper";
import {constructorSliderList} from '../../components/ConstructorSlider/list';
import {setsTextLest} from './list';
import './index.scss';
import useFetch from "../../api/useFetch";
import ErrorIndicator from "../../components/ErrorIndicator";

const Sets = () => {
    const {t} = useTranslation();
    const [response, error, isLoading] = useFetch('sets')
    return (
        <div
            itemProp={'setsContainer'}
            itemScope
            className={'sets_container'}
        >
            {isLoading && <Spinner />}
            {error && <ErrorIndicator /> }
            {
                response &&
                <>
                    <HeadingBlock title={t('sets.title')} svg={true} />
                    <div
                        itemProp={'setsContainerBlock'}
                        itemScope
                        className={'sets_container_block'}
                    >
                        {
                            response.map(el =>
                                <CustomFoodBlock
                                    key={el._id}
                                    food={el}
                                    style={true}
                                    margin={'50px'}
                                />
                            )
                        }
                    </div>
                    <div
                        itemProp={'setsContainerFooter'}
                        itemScope
                        className={'footer_container'}
                    >
                        <div
                            itemProp={'setsContainerFooterHeader'}
                            className={'header'}
                        >
                            <h3 itemProp={'name'}>{t('sets.megaSets')}</h3>
                        </div>
                        <div
                            itemProp={'content'}
                            itemScope
                            className={'content'}
                        >
                            <div
                                itemProp={'contentLeft'}
                                className={'content_left'}
                            >
                                {
                                    setsTextLest.map(l =>
                                        <p
                                            key={l.id}
                                            itemProp={'contentLeftText'}
                                        >
                                            {t(`${l.text}`)}
                                        </p>)
                                }
                            </div>
                            <div
                                itemProp={'contentRight'}
                                itemScope
                                className={'content_right'}
                            >
                                <p itemProp={'contentRightText'}>
                                    {t('sets.right.1')}<br/>
                                    <span itemProp={'profession'}>
                                {t('sets.right.2')}<br/>
                            </span>
                                    <span itemProp={'money'}>
                               {t('sets.right.3')}<br/>
                            </span>
                                </p>
                                <p itemProp={'historyText'}>{t('sets.right.4')}</p>
                            </div>
                        </div>

                    </div>
                    <div
                        itemProp={'setsContent'}
                        itemScope
                        className={'sets-content'}
                    >
                        <div className="header">
                            <h3 itemProp = "name">
                                {t('sets.collectYourSet')}
                            </h3>
                        </div>
                        <SetsSlider list={constructorSliderList} title={false} />
                        <ConstructorSlider style={true} />
                    </div>
                </>
            }

        </div>
    )
}

export default Sets;