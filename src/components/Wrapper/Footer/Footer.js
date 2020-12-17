import React from 'react';
import {useTranslation} from "react-i18next";
import { NavLink } from "react-router-dom";

import './footer.scss';

//icons
import geo from '../../../assets/components/Wrapper/Footer/geo.svg';
import phone from '../../../assets/components/Wrapper/Footer/phone.svg';

const footer = React.memo((props) => {
    const {t} = useTranslation();
    return (
        <div className="custom-footer">
            <div className="content">
                <div className="content_left">
                    <div className="content_left__contacts">
                        <div>
                            <h3>{t('components.footer.title.1')}</h3>
                            <ul>
                                <li>
                                    <img src={geo} alt="img"></img>
                                    <span>{t('components.footer.contact.1')}</span>
                                </li>
                                <li>
                                    <img src={phone} alt="img"></img>
                                    <span>068 719 24 24</span>
                                </li>
                                <li>
                                    <img src={phone} alt="img"></img>
                                    <span>050 719 24 24</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="content_left__menu">
                        <h3>{t('components.footer.title.2')}</h3>
                        <div className="content_left__menu__list">
                            <ul style={{paddingLeft: '0px'}}>
                                <li>
                                    <NavLink to="/sets">
                                        {t('components.footer.menu.1')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/rolls">
                                        {t('components.footer.menu.2')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sushi'}>
                                        {t('components.footer.menu.3')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/wok'}>
                                        {t('components.footer.menu.4')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/soups'}>
                                        {t('components.footer.menu.5')}
                                    </NavLink>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <NavLink to={'/hot'}>
                                        {t('components.footer.menu.6')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/salads'}>
                                        {t('components.footer.menu.7')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sashimi'}>
                                        {t('components.footer.menu.8')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/drinks'}>
                                        {t('components.footer.menu.9')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/sauces'}>
                                        {t('components.footer.menu.10')}
                                    </NavLink></li>
                            </ul>
                            <ul>
                                <li>
                                    <NavLink to={'/pizza'}>
                                        {t('components.footer.menu.11')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/snacks'}>
                                        {t('components.footer.menu.12')}
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={'/dessert'}>
                                        {t('components.footer.menu.13')}
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="content_right">
                    <div className="content_right__info">
                        <h3>{t('components.footer.title.3')}</h3>
                        <ul>
                            <li>
                                <NavLink to="/24ROLLS">
                                    {t('components.footer.aboutUs.1')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/24ROLLS">
                                    {t('components.footer.aboutUs.2')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shares">
                                    {t('components.footer.aboutUs.3')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/delivery">
                                    {t('components.footer.aboutUs.4')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us">
                                    {t('components.footer.aboutUs.5')}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">
                                    {t('components.footer.aboutUs.6')}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="content_right__get-news">
                        <input type="text" placeholder={t('components.footer.email')}></input>
                        <button>Готово</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default footer;