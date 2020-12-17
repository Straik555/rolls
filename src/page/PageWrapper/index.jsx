import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {string} from "prop-types";

import './index.scss';
import CustomFoodBlock from "../../components/CustomFoodBlock";
import HeadingBlock from '../../components/HeadingBlock';
import useFetch from "../../api/useFetch";
import Spinner from "../../components/Spinner";
import ImageWrapper from "../../components/ImagesWrapper";
import ErrorIndicator from "../../components/ErrorIndicator";

const PageWrapper = ({title, url}) => {
    const {t} = useTranslation();
    const[response, error, isLoading] = useFetch(url)
    return (
        <div
            itemProp={'rollsContainer'}
            itemScope
            className={'rolls_container'}
        >
            {isLoading && <Spinner /> }
            {error && <ErrorIndicator />}
            {
                response && <>
                    <HeadingBlock title={t(title)} svg={true} />

                    <div
                        itemProp={'rollsContainerBlock'}
                        itemScope
                        className={'rolls_container_block'}
                    >
                        {
                            response.map(el =>
                                <CustomFoodBlock style={true} key={el._id} food={el} />
                            )
                        }
                    </div>
                </>
            }
        </div>
    )
}

PageWrapper.propTypes = {
    title: string.isRequired,
    url: string
}

export default PageWrapper;