import React from 'react';

import './wrapper.scss';
import '../../style/index.scss'

import Header from './Header/Header';
import Footer from './Footer/Footer';
import LeftMenu from './LeftMenu/LeftMenu';
import RightMenu from './RightMenu/RightMenu';
import MapBlock from './MapBlock/MapBlock';
import GreenTools from '../GreenTools/GreenTools';

const Wrapper = (props) => {

    const onCityChangeHandler = (cityName) => {
        props.setCity(cityName);
    }

    return (
        <>
        <div className="wrapper">
            <Header 
            city={props.city}
            onCityChange={onCityChangeHandler}
            isAuthorized={props.isAuthorized}
            />
            <GreenTools />
            <div className="custom-main">
                <LeftMenu />
                <div className="content__column">
                    {props.children}
                    <div style={{marginTop: 'auto'}}>
                        <MapBlock
                        city={props.city} 
                        />
                    </div>
                </div>
                <RightMenu />
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Wrapper;