import React, {useState} from 'react';
import Modal from 'react-modal';
import { Icon } from 'react-icons-kit';
import {ic_clear} from 'react-icons-kit/md/ic_clear';
import * as R from 'ramda';
import { useTranslation } from 'react-i18next';
import {Link} from "react-router-dom";

import './index.scss';
import ListBasket from "./ListBasket";
import {useCustomStore} from "../../context/useStore";
import basket from "../../assets/components/Wrapper/Header/basket.svg";

const customStyles = {
    content : {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 500ms ease-in-out',
        zIndex: '1000000 !important',
    }
};

Modal.setAppElement('#root')

const Basket = ({title, style}) => {
    const {t} = useTranslation();
    const [modalIsOpen,setIsOpen] = useState(false);
    const {state} = useCustomStore();
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    const totalPrice = state.cart.basket ? R.compose(
        R.sum,
        R.pluck('priceAll')
    )(state.cart.basket) : 0;
    return (
        <>
            <button
                itemProp={'openModal'}
                itemType={'submit'}
                className={!style ? 'open-modalTwo' : 'open-modal' }
                onClick={openModal}
                style={!title ? {width: 'auto'} : null }
            >
                { title ? t(title) : <img src={basket} alt="img"></img>}
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div
                    itemProp={'modalBlock'}
                    itemScope
                    className={'modal-block'}>
                    <button
                        itemProp={'buttonClose'}
                        className={'button-close'}
                        onClick={closeModal}
                    >
                        <Icon
                            size={'100%'}
                            icon={ic_clear}
                        />
                    </button>
                    <h2 itemProp={'name'}>
                        Корзина
                    </h2>
                    <div
                        itemProp={'modalBlockContent'}
                        itemScope
                        className={'modal-block_content'}
                    >
                        {
                            !!state.cart.basket.length ? state.cart.basket.map(el =>  <ListBasket key={el._id} list={el} />) : <p>{t('components.basket.cartEmpty')}</p>
                        }
                    </div>
                    <div
                        itemProp={'modalBlockFooter'}
                        itemScope
                        className={'modal-block_footer'}>
                        <div
                            itemProp={'modalBlockFooterLeft'}
                            className={'left'}>
                            <p itemProp={'name'}>{t('components.basket.total')}</p>
                            <h2 itemProp={'totalPrice'}>{totalPrice}</h2>
                        </div>
                        {
                            !!state.cart.basket.length ? <button
                                itemProp={'order'}
                                className={'right'}
                            >
                                <Link
                                    to={'/'}
                                >
                                    {t('button.checkout')}
                                </Link>
                            </button> : null
                        }
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Basket;