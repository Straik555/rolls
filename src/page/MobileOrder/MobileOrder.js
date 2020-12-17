import React from 'react';
import {useTranslation} from "react-i18next";

import cake from '../../assets/components/Wrapper/RightMenu/cake.png';
import minus from '../../assets/components/ConstructorSlider/minus.svg';
import plus from '../../assets/components/ConstructorSlider/plus.svg';

import './mobileorder.scss';

const mobileOrder = React.memo(( props ) => {

    const {t} = useTranslation();

    return (
        <div className="mobile-order">
            <h2 style={{marginBottom: '0'}}> твой заказ </h2>
        <div className="right-customs__bottom" style={{ width: '90%', boxShadow: 'none'}}>
                <div className="right-customs__bottom__title" style={{paddingTop: '0', paddingBottom: '20px'}}>
                    <img src={cake} alt="img"></img>
                    <p>{t('components.menu.right.4')}</p>
                </div>
                <form className="right-customs__bottom__form">
                    <div className="right-customs__bottom__form__name">
                        <input type="text" placeholder={t('components.menu.right.2')}></input>
                        <input type="tel" placeholder="+7(___)___-__-__"></input>
                        <input type="text" placeholder={t('components.menu.right.5')}></input>
                    </div>
                    <div className="right-customs__bottom__form__address">
                        <div className="right__bottom__form__address--item">
                            <p>{t('components.menu.right.6')}</p>
                            <input type="text"></input>
                        </div>
                        <div className="right-customs__bottom__form__address--item">
                            <p>{t('components.menu.right.7')}</p>
                            <input type="text"></input>
                        </div>
                        <div className="right-customs__bottom__form__address--item">
                            <p>{t('components.menu.right.8')}</p>
                            <input type="text"></input>
                        </div>
                        <div className="right-customs__bottom__form__address--item">
                            <p>{t('components.menu.right.9')}</p>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div className="right-customs__bottom__form__delivery">
                        <input type="checkbox" id="checkbox_1"></input>
                        <label htmlFor="checkbox_1"></label>
                        <span>{t('components.menu.right.10')}</span>
                    </div>
                    <div className="right-customs__bottom__form__option">
                        <select>
                            <option>{t('components.menu.right.11')}</option>
                            <option>{t('components.menu.right.12')}</option>
                            <option>{t('components.menu.right.13')}</option>
                        </select>
                        <input type="text" placeholder={t('components.menu.right.14')}></input>
                        <div className="devices_input_disabled">
                            <span>
                            {t('components.menu.right.15')}
                            </span>
                            <div className="devices_input_disabled__tools">
                            <amp-img
                                itemType={'url'}
                                itemProp={'imgMinus'}
                                src={minus}
                                alt="minus"
                                width={'20'}
                                height={'20'} />
                            <span>
                                0
                            </span>
                            <amp-img
                                itemType={'url'}
                                itemProp={'imgPlus'}
                                src={plus}
                                alt="plus"
                                width={'20'}
                                height={'20'}
                                style={{ marginTop: '1.5px' }}/>
                            </div>
                        </div>
                    </div>
                    <div className="right-customs__bottom__form__checkbox">
                        <input type="checkbox" id="checkbox_2"></input>
                        <label htmlFor="checkbox_2"></label>
                        <span>{t('components.menu.right.16')}</span>
                    </div>
                    <div className="right-customs__bottom__form__area">
                        <textarea placeholder={t('components.menu.right.17')}></textarea>
                    </div>
                    <div className="right-customs__bottom__form__area__check">
                        <input type="checkbox" id="checkbox_3"></input>
                        <label htmlFor="checkbox_3"></label>
                        <p>{t('components.menu.right.18')}</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit">{t('button.checkout')}</button>
                    </div>
                </form>
            </div>
        </div>
    );
});

export default mobileOrder;