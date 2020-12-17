import React from 'react';
import { NavLink } from 'react-router-dom';

import './mobileMenu.scss';

const mobileMenu = React.memo(( props ) => {
    return (
            <div className="mobile-menu">
                <ul>
                    <li><span><NavLink to="/24ROLLS">меню</NavLink></span></li>
                    <li><span><NavLink to="/shares">акции</NavLink></span></li>
                    <li><span><NavLink to="/delivery">доставка/оплата</NavLink></span></li>
                    <li><span><NavLink to="/about-us">контакты</NavLink></span></li>
                    <li><span><NavLink to="/blog">блог</NavLink></span></li>
                </ul>
                <button className="mobile-menu__create-order">
                    <NavLink to="/main-mobile/order">
                        Оформить заказ
                    </NavLink>
                </button>
                <button className="mobile-menu__log-in">
                    <NavLink to="/main-mobile/log-in">
                        Войти в личный кабинет
                    </NavLink>
                </button>
            </div>
    );
});

export default mobileMenu;