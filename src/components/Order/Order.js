import React from 'react';
import { withTranslation } from "react-i18next";

import { storeContext } from '../../context/providerContext';

import './order.scss';

//icon
import cake from '../../assets/components/Wrapper/RightMenu/cake.png';
import minus from '../../assets/components/ConstructorSlider/minus.svg';
import plus from '../../assets/components/ConstructorSlider/plus.svg';

class Order extends React.Component {

    static contextType = storeContext;

    state = {
        form : {
            name: {
                value: ''
            },
            phone: {
                value: ''
            },
            address: {
                value: ''
            },
            flat: {
                value: ''
            },
            entrance: {
                value: ''
            },
            floor: {
                value: ''
            },
            intercom: {
                value: ''
            },
            comment: {
                value: ''
            }
        },
        payType: 'cash',
        beskontaktnaya: false,
        tools: true,
        toolsCount: 0,
        bonusVisible: false,
        bonusSum: 0,
        agree: false
    }

    onSelectChange = (event) => {
        this.setState((prevState) => ({
            payType: event.target.value,
            beskontaktnaya: event.target.value === 'cash' ? false : prevState.beskontaktnaya
        }));
    }

    onBonusChange = (event) => {
        this.setState({
            bonusSum: event.target.value
        });
    }

    render() {

        const {t} = this.props;
        const { state } = this.context;
        
        const totalSum = state.cart.basket.reduce((acc, el) => {
            return acc + el.priceAll
        }, 0);

        let maxBonuses = state.bonus;
        if ( maxBonuses > 0.5 * totalSum ) {
            maxBonuses = 0.5 * totalSum;
        };

        const disabledButtonStyle = {
            color: 'rgba(0, 0, 0, 0.26)',
            backgroundColor: '#e0e0e0'
        };

        return (
            <div className="right-customs">
                <div className="right-customs__bottom">
                    <div className="right-customs__bottom__title">
                        <img src={cake} alt="img"></img>
                        <p>{t('components.menu.right.4')}</p>
                    </div>
                    <form className="right-customs__bottom__form">
                        <div className="right-customs__bottom__form__name">
                            <input required type="text" placeholder={t('components.menu.right.2')}></input>
                            <input required type="tel" placeholder="+38(___)___-__-__"></input>
                            <input required type="text" placeholder={t('components.menu.right.5')}></input>
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
                            <input 
                            disabled={this.state.payType === 'cash'}
                            checked={this.state.beskontaktnaya}
                            onChange={
                                () => {this.setState((prevState) => ({beskontaktnaya: !prevState.beskontaktnaya}))}
                            }
                            type="checkbox" 
                            id="checkbox_1"></input>
                            <label htmlFor="checkbox_1">
                                <span>{t('components.menu.right.10')}</span>
                            </label>
                        </div>
                        <div className="right-customs__bottom__form__option">
                            <select 
                            value={this.state.payType}
                            onChange={(e) => this.onSelectChange(e)}>
                                <option value={'cash'}>{t('components.menu.right.11')}</option>
                                <option value={'card'}>{t('components.menu.right.12')}</option>
                            </select>
                            {this.state.payType === 'cash' && 
                            <input 
                            required
                            type="text" 
                            placeholder={t('components.menu.right.14')} />}

                            <div className="right-customs__bottom__form__bonuses-use">
                                <div className='right-customs__bottom__form__bonuses-use__switcher'>
                                    <input 
                                    type="checkbox" 
                                    onChange={()=>this.setState(prevState => ({ bonusVisible: !prevState.bonusVisible}))}/>
                                    <span>{'Использовать бонусы'}</span>
                                </div>
                                <div 
                                className="right-customs__bottom__form__bonuses-use__slidecontainer"
                                style={{
                                    opacity: this.state.bonusVisible ? 1 : 0,
                                    height: this.state.bonusVisible ? '100%' : '0px'
                                }}>
                                        <input 
                                        onChange={(e)=>this.onBonusChange(e)}
                                        type="range" 
                                        min="0" 
                                        max={maxBonuses} 
                                        value={this.state.bonusSum} 
                                        className="slider" />
                                        <div className="right-customs__bottom__form__bonuses-use__slidecontainer__text">
                                            <p
                                            style={{
                                                flex: '0 1 30%'
                                            }}
                                            >
                                                <span style={{ fontWeight: '700' }}>{this.state.bonusSum}</span> грн
                                            </p>
                                            <p
                                            style={{
                                                flex: '0 1 70%',
                                                textAlign: 'right',
                                                fontSize: '12px'
                                                }}>
                                                Бонусами можно оплатить до 50% цены
                                            </p>
                                        </div>
                                </div>
                            </div>

                            <div className="devices_input_disabled">
                                <span>
                                {t('components.menu.right.15')}
                                </span>
                                {this.state.tools && 
                                <div className="devices_input_disabled__tools">
                                <amp-img
                                    onClick={()=>{
                                        this.setState((prevState) => ({
                                            toolsCount: prevState.toolsCount !== 0 ? prevState.toolsCount - 1 : 0
                                        }));
                                    }}
                                    itemType={'url'}
                                    itemProp={'imgMinus'}
                                    src={minus}
                                    alt="minus"
                                    width={'20'}
                                    height={'20'} />
                                <span>
                                    {this.state.toolsCount}
                                </span>
                                <amp-img
                                    onClick={()=>{
                                        this.setState((prevState) => ({
                                            toolsCount: prevState.toolsCount + 1
                                        }));
                                    }}
                                    itemType={'url'}
                                    itemProp={'imgPlus'}
                                    src={plus}
                                    alt="plus"
                                    width={'20'}
                                    height={'20'}
                                    style={{ marginTop: '1.5px' }}/>
                                </div>}
                            </div>
                        </div>
                        <div className="right-customs__bottom__form__checkbox">
                            <input
                            checked={!this.state.tools}
                            onChange={() => {
                                this.setState((prevState) => ({
                                    tools: !prevState.tools
                                }));
                            }} 
                            type="checkbox" 
                            id="checkbox_2" />
                            <label htmlFor="checkbox_2">
                                <span>{t('components.menu.right.16')}</span>
                            </label>
                        </div>
                        <div className="right-customs__bottom__form__area">
                            <textarea 
                            style={{
                                resize: 'vertical',
                                minHeight: '30px'
                            }}
                            placeholder={t('components.menu.right.17')} />
                        </div>
                        <div className="right-customs__bottom__form__area__check">
                            <input 
                            checked={this.state.agree}
                            onChange={() => {
                                this.setState((prevState)=>({
                                    agree: !prevState.agree
                                }));
                            }}
                            type="checkbox" 
                            id="checkbox_3" />
                            <label htmlFor="checkbox_3">
                                <p>{t('components.menu.right.18')}</p>
                            </label>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button 
                            disabled={!this.state.agree}
                            style={!this.state.agree ? disabledButtonStyle : null}
                            type="submit">
                                {t('button.checkout')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default withTranslation()(Order);