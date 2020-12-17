import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import store from 'store';
import { useTranslation } from 'react-i18next';

import './header.scss';

// big icons
import logo from '../../../assets/components/Wrapper/Header/logo.png';
import basket from '../../../assets/components/Wrapper/Header/basket.svg';
import favourite from '../../../assets/components/Wrapper/Header/favourite.svg';
import personal from '../../../assets/components/Wrapper/Header/personal.svg';
import select from '../../../assets/components/Wrapper/Header/select.png';

// small icons
import logoSmall from '../../../assets/components/Wrapper/Header/logo-small.svg';
import geoSmall from '../../../assets/components/Wrapper/Header/geo-small.svg';
import phoneSmall from '../../../assets/components/Wrapper/Header/phone-small.svg';
import moreSmall from '../../../assets/components/Wrapper/Header/more-small.svg';
import Basket from "../../Basket";

function Header(props) {
    const { t, i18n } = useTranslation();
    // state for language
    const [ language, setLanguage ] = useState(localStorage.getItem('i18nextLng'));
    const [ openedModalForLanguage, setOpenedModalForLanguage ] = useState(false);
    // state for city
    const [ openModalForCity, setOpenedModalForCity ] = useState(false);

    const langClick = (lang) => {
        setLanguage(lang)
        i18n.changeLanguage(lang);
    }


    // handlers for city functions
    const setDniproCity = () => {
        props.onCityChange(1);
        setOpenedModalForCity(false);
        const storage = store.get('24rolls');
        storage.customOptions.city = 'Dnipro';
        store.set('24rolls', storage);
    };
    const setZaporijjaCity = () => {
        props.onCityChange(2);
        setOpenedModalForCity(false);
        const storage = store.get('24rolls');
        storage.customOptions.city = 'Zaporijja';
        store.set('24rolls', storage);
    }

    // stylesForModals
    let modalForLanguageStyles = "modal-window-for-language modal-window-closed";
    if ( openedModalForLanguage ) {
        modalForLanguageStyles = "modal-window-for-language modal-window-opened";
    }
    let modalForCityStyles = "modal-window-for-city modal-window-closed";
    if ( openModalForCity ) {
        modalForCityStyles = "modal-window-for-city modal-window-opened"
    }


    return(
        <header className="header">
            <div className="header__column column">

                <div className="left-menu">
                   <div className="column">
                        {/* for big screens */}
                        <div className="left-menu__language">
                                <span
                                onClick={() => {
                                    setOpenedModalForLanguage(!openedModalForLanguage);
                                    setOpenedModalForCity(false);
                                }
                                }>
                                    {language}
                                </span>
                                <img
                                alt="select"
                                src={select}
                                onClick={() => {
                                    setOpenedModalForLanguage(!openedModalForLanguage);
                                    setOpenedModalForCity(false);
                                }
                                }/>
                            </div>
                            {/* modal for language */}
                            <div className={modalForLanguageStyles}>
                                <ul>
                                    <li onClick={()=>langClick("ru")}>RU</li>
                                    <hr style={{margin: "0"}}/>
                                    <li onClick={()=>langClick("ua")}>UA</li>
                                </ul>
                            </div>
                            <div className="left-menu__city">
                                <label
                                onClick={() => {
                                    setOpenedModalForCity(!openModalForCity);
                                    setOpenedModalForLanguage(false);
                                }
                                }>
                                {t('components.header.selectionCity')}
                                </label>
                                <span
                                onClick={() => {
                                    setOpenedModalForCity(!openModalForCity);
                                    setOpenedModalForLanguage(false);
                                }
                                }>
                                    {t(`components.header.city.${props.city}`)}
                                </span>
                                <img
                                alt="select"
                                src={select}
                                style={{ marginTop: '5px', marginLeft: '5px'}}
                                onClick={() => {
                                    setOpenedModalForCity(!openModalForCity);
                                    setOpenedModalForLanguage(false);
                                }
                                }/>
                            </div>
                            {/* modal for city */}
                            <div className={modalForCityStyles}>
                                <ul>
                                    <li onClick={setDniproCity}>{t('components.header.city.1')}</li>
                                    <hr style={{margin: "0"}}/>
                                    <li onClick={setZaporijjaCity}>{t('components.header.city.2')}</li>
                                </ul>
                            </div>
                            <div className="left-menu__phone">
                            Тел: (066)(098)(073)
                            <span>
                                560-44-24
                            </span>
                            </div>

                         {/* for small screens */}
                         <div className="left-menu_for-small-screens">
                            <div className="left-menu__item">
                                <a href="/#">
                                    <img src={geoSmall} alt="Geo" />
                                </a>
                            </div>
                            <div
                                className="left-menu__item"
                                style={{
                                    borderLeft: '2px solid white',
                                    borderRight: '2px solid white'
                                    }}>
                                <a href="/#">
                                    <img src={phoneSmall} alt="phone" />
                                </a>
                            </div>
                            <div className="left-menu__item">
                                <a href="/#">
                                    <img src={favourite} alt="favourite" />
                                </a>
                            </div>
                         </div>
                    </div>
                </div>

                <div className="pure" />

                <div className="right-menu">
                    <div className="right-menu__items">
                        {/* for big screens */}
                        <div className="right-menu__items__item bordered">
                            <Basket />
                        </div>
                        <div className="right-menu__items__item bordered">
                            <a href="/#">
                                <img src={favourite} alt="img"></img>
                            </a>
                        </div>
                        <div className="right-menu__items__item">
                            <NavLink to={props.isAuthorized ? "/order/personal" : "/log-in"}>
                                <img src={personal} alt="img"></img>
                            </NavLink>
                        </div>

                        {/* for small screens */}
                        <div className="right-menu_for-small-screens">
                            <div className="left-menu__item">
                                    <NavLink to="/order">
                                        <img src={basket} alt="basket" />
                                    </NavLink>
                                </div>  
                                <div 
                                    className="left-menu__item" 
                                    style={{
                                        borderLeft: '2px solid white',
                                        borderRight: '2px solid white'
                                        }}>
                                    <NavLink to={props.isAuthorized ? "/order/personal" : "/log-in"}>
                                        <img src={personal} alt="personal" />
                                    </NavLink>
                                </div> 
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
                            {/* for big screens */}
                            <img src={logo} alt="img" className="bottom__header_logo"/>
                             {/* for small screens */}
                            <img src={logoSmall} alt="img" className="bottom__header_logo-small"/>
                </div>

                {/* for huge screens */}
                <div className="bottom__header__items">
                    <div className="bottom__header__left-list">
                        <ul>
                            <li className="bordered_grey"><NavLink to="/24ROLLS" exact activeClassName="green-item">{t('components.header.menu.1')}</NavLink></li>
                            <li className="bordered_grey"><NavLink to='/shares' activeClassName="green-item">{t('components.header.menu.2')}</NavLink></li>
                            <li><NavLink to="/delivery" activeClassName="green-item">{t('components.header.menu.3')}</NavLink></li>
                        </ul>
                    </div>
                    <div className="pure" />
                    <div className="bottom__header__right-list">
                        <ul>
                            <li
                            className="bordered_grey"
                            style={{ borderLeft: '2px solid #C4C4C4'}}>
                                <NavLink to="/about-us" activeClassName="green-item">{t('components.header.menu.4')}</NavLink>
                            </li>
                            <li><NavLink to='/blog' activeClassName="green-item">{t('components.header.menu.5')}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;