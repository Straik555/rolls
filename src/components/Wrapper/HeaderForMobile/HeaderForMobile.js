import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../Wrapper/wrapper.scss';

import moreSmall from '../../../assets/components/Wrapper/Header/more-small.svg';
import logoSmall from '../../../assets/components/Wrapper/Header/logo-small.svg';

const headerForMobile = (props) => {
    return (
        <header className="header">
            <div className="header__column column">
                <div className="left-menu" />

                <div className="pure" />

                <div className="right-menu">
                    <div className="right-menu__items">
                        <div className="right-menu_for-small-screens">
                                <div className="left-menu__item">
                                    <NavLink to="/main-mobile/menu">
                                        <img src={moreSmall} alt="more" />
                                    </NavLink>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
                 
            <div className="bottom__header">
                <div className="bottom__header__nav__logo" >
                            <img src={logoSmall} alt="img" className="bottom__header_logo-small"/>
                </div>

            </div>
        </header>
    );
};

export default headerForMobile;