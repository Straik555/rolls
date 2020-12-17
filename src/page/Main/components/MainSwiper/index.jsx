import React from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";
import {string, array} from "prop-types";

import CustomFoodBlock from "../../../../components/CustomFoodBlock";
import useFetch from "../../../../api/useFetch";
import Spinner from "../../../../components/Spinner";
import './index.scss';

const MainSwiper = ({title, to, url}) => {
    const [response, error, isLoading] = useFetch(url)
    const {t} = useTranslation();
    return (
        <div className={'main-swiper'}>
            <div className={'main-swiper_header'}>
                <h1>
                    {title}
                </h1>
            </div>
            {
                isLoading ? <Spinner /> :
                    <div className={'wrapper'}>
                        {
                            response.map(el =>
                                <CustomFoodBlock
                                    key={el._id}
                                    food={el}
                                    style={false}
                                />
                            )
                        }
                    </div>
            }
            <div className={'main-swiper_footer'}>
                <button>
                    <Link to={to}>
                        {t('button.more')}
                    </Link>
                </button>
            </div>
        </div>

    )
}

MainSwiper.propTypes = {
    title: string.isRequired,
    url: string.isRequired,
    to: string.isRequired
}

export default MainSwiper;