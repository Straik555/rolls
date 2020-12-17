import React from 'react';
import { useTranslation } from 'react-i18next';

import MainSlider from "./MainSlider";
import MainSwiper from "./components/MainSwiper";
import ConstructorSlider from '../../components/ConstructorSlider';
import SetsSlider from '../../components/SetsSlider';
import MainPopularGoods from './MainPopularGoods';
import MainWhyUs from "./MainWhyUs";
import MainFeedback from "./MainFeedback";
import MainBlog from './MainBlog';
import {constructorSliderList} from '../../components/ConstructorSlider/list';
import {rollsList} from "../PageWrapper/list";
import {setsList} from '../Sets/list';
import {mainPasta, saladsList} from './list';
import './index.scss';
import MainHeader from "./components/MainHeader";
import MainSocialNetworks from "./MainSocialNetworks";
import MainBottomBlock from "./MainBottomBlock";
import headerSvg from '../../assets/page/Main/header.svg';
import ErrorBoundary from "../../components/ErrorBoundary";

const MainPage = () => {
    const {t} = useTranslation();
    return(
        <ErrorBoundary>
            <div className={'main'}>
                <MainSlider />
                <div className={'header-svg'}>
                    <img src={headerSvg} alt=""/>
                </div>
                <MainSwiper title={t('main.swiper.1')} to={'/sets'} url={'wokAndPasta'} />
                <MainHeader title={t('main.title.1')} />
                <SetsSlider list={constructorSliderList} title={false} url={'wokAndPasta'} />
                <ConstructorSlider />
                <MainHeader title={t('main.title.2')} />
                <MainPopularGoods />
                <MainHeader title={t('main.title.3')} />
                <MainWhyUs />
                <MainSwiper title={t('main.swiper.2')} to={'/rolls'}  url={'wokAndPasta'}/>
                <MainFeedback />
                <MainSwiper title={t('main.swiper.3')} to={'/salads'} url={'salads'} />
                <MainBlog />
                <MainSwiper title={t('main.swiper.4')} to={'/wok'} url={'wokAndPasta'} />
                <MainHeader title={t('main.title.4')} />
                <MainSocialNetworks />
                <MainHeader title={t('main.title.5')} />
                <MainBottomBlock />
            </div>
        </ErrorBoundary>
    )
}

export default MainPage;