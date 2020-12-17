import React from 'react';
import { NavLink } from 'react-router-dom';
import {useTranslation} from "react-i18next";

import './leftmenu.scss';

const leftMenu = React.memo((props) => {
    const {t} = useTranslation();
    return (
        <div className="left-sidebar">
            <ul className='left-sidebar__list'>
                <li><NavLink to="/sets">{t('components.menu.left.1')}</NavLink></li>
                <li><NavLink to="/rolls">{t('components.menu.left.2')}</NavLink></li>
                <li><NavLink to="/sushi" className="left-sidebar__list--item">{t('components.menu.left.3')}</NavLink></li>
                <li><NavLink to="/wok" className="left-sidebar__list--item">{t('components.menu.left.4')}</NavLink></li>
                <li><NavLink to="/soups" className="left-sidebar__list--item">{t('components.menu.left.5')}</NavLink></li>
                <li><NavLink to="/hot" className="left-sidebar__list--item">{t('components.menu.left.6')}</NavLink></li>
                <li><NavLink to="/salads" className="left-sidebar__list--item">{t('components.menu.left.7')}</NavLink></li>
                <li><NavLink to="/sashimi" className="left-sidebar__list--item">{t('components.menu.left.8')}</NavLink></li>
                <li><NavLink to="/drinks" className="left-sidebar__list--item">{t('components.menu.left.9')}</NavLink></li>
                <li><NavLink to="/sauces" className="left-sidebar__list--item">{t('components.menu.left.10')}</NavLink></li>
                <li><NavLink to="/pizza" className="left-sidebar__list--item">{t('components.menu.left.11')}</NavLink></li>
                <li><NavLink to="/snacks" className="left-sidebar__list--item">{t('components.menu.left.12')}</NavLink></li>
                <li><NavLink to="/dessert" className="left-sidebar__list--item">{t('components.menu.left.13')}</NavLink></li>
            </ul>
            <div className="left-bottom">
                <ul className="left-bottom__list">
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.14')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.15')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.16')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.17')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.18')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.19')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.20')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.21')}</a></li>
                    <li><a href="/#" className="left-bottom__list--item">{t('components.menu.left.22')}</a></li>
                </ul>
            </div>
        </div>
    );
});

export default leftMenu;