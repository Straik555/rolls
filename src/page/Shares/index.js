import React from 'react'
import { useTranslation } from 'react-i18next';

import HeadingBlock from "../../components/HeadingBlock";
import './index.scss';

import rolls from '../../assets/page/Shares/rolls.jpg';
import sushi from '../../assets/page/Shares/sushi.jpg';
import board from '../../assets/page/Shares/board.svg';

const Shares = () => {
    const {t} = useTranslation()
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <HeadingBlock title={t('shares.title')} svg={true} />
        <div className="masonry-layout">
                    <div className="masonry-layout__panel" style={{ order: '1' }} >
                        <div className="masonry-layout__panel__header">
                            <img src={sushi} alt="sushi" />
                        </div>
                        <div className="masonry-layout__panel__content">
                            <h4>Новинки меню</h4>
                            <p>Как оно, когда тебе мурлыкает сет, как КОТ В МЕШКЕ? Именно в нем скрывается самая вкусная тайна, познав, которую становишься ее заложником.</p>
                        </div>
                    </div>
                    <div className="masonry-layout__panel" style={{ order: '2' }}>
                        <div className="masonry-layout__panel__header">
                            <img src={rolls} alt="rolls" />
                        </div>
                        <div className="masonry-layout__panel__content">
                            <h4>Фуджи сет + Cola в подарок</h4>
                            <p>Только по вторникам при заказе НАВЫНОС - второй ролл БЕСПЛАТНО.</p>
                            <p>Каждый второй ролл в чеке - бесплатно! Второй ролл</p>
                            <p>(8 шт.) меньший по стоимости вы получаете в подарок. В заказе должно быть четное кол-во роллов и только по целой порции.</p>
                            <p>*акция не суммируется с другими акциями, скидками</p>
                        </div>
                    </div>
                    <div className="masonry-layout__panel" style={{ order: '3' }}>
                        <div className="masonry-layout__panel">
                            <div className="masonry-layout__panel__header">
                                <img src={board} alt="board" />
                            </div>
                            <div className="masonry-layout__panel__content">
                                <h4>Выбирай свой подарок</h4>
                                <p>Как оно, когда тебе мурлыкает сет, как КОТ В МЕШКЕ? Именно в нем скрывается самая вкусная тайна, познав, которую становишься ее заложником.</p>
                            </div>  
                        </div>
                    </div>
                
                
                    <div className="masonry-layout__panel">
                        <div className="masonry-layout__panel__header">
                            <img src={rolls} alt="rolls" />
                        </div>
                        <div className="masonry-layout__panel__content">
                            <h4>Фуджи сет + Cola в подарок</h4>
                            <p>Только по вторникам при заказе НАВЫНОС - второй ролл БЕСПЛАТНО.</p>
                            <p>Каждый второй ролл в чеке - бесплатно! Второй ролл</p>
                            <p>(8 шт.) меньший по стоимости вы получаете в подарок. В заказе должно быть четное кол-во роллов и только по целой порции.</p>
                            <p>*акция не суммируется с другими акциями, скидками</p>
                        </div>
                    </div>
                    <div className="masonry-layout__panel">
                        <div className="masonry-layout__panel__header">
                            <img src={board} alt="rolls" />
                        </div>
                        <div className="masonry-layout__panel__content">
                            <h4>Выбирай свой подарок</h4>
                            <p>Только по вторникам при заказе НАВЫНОС - второй ролл БЕСПЛАТНО.</p>
                            <p>Каждый второй ролл в чеке - бесплатно! Второй ролл</p>
                            <p>(8 шт.) меньший по стоимости вы получаете в подарок. В заказе должно быть четное кол-во роллов и только по целой порции.</p>
                            <p>*акция не суммируется с другими акциями, скидками</p>
                        </div>
                    </div>
                    <div className="masonry-layout__panel">
                        <div className="masonry-layout__panel__header">
                            <img src={sushi} alt="sushi" />
                        </div>
                        <div className="masonry-layout__panel__content">
                            <h4>Новинки меню</h4>
                            <p>Как оно, когда тебе мурлыкает сет, как КОТ В МЕШКЕ? Именно в нем скрывается самая вкусная тайна, познав, которую становишься ее заложником.</p>
                        </div>
                    </div>
                
            
                <div className="masonry-layout__panel">
                    <div className="masonry-layout__panel__header">
                            <img src={rolls} alt="rolls" />
                        </div>
                        <div className="masonry-layout__panel__content">
                            <h4>Фуджи сет + Cola в подарок</h4>
                            <p>Только по вторникам при заказе НАВЫНОС - второй ролл БЕСПЛАТНО.</p>
                            <p>Каждый второй ролл в чеке - бесплатно! Второй ролл</p>
                            <p>(8 шт.) меньший по стоимости вы получаете в подарок. В заказе должно быть четное кол-во роллов и только по целой порции.</p>
                            <p>*акция не суммируется с другими акциями, скидками</p>
                        </div>
                    </div>
                <div className="masonry-layout__panel">
                        <div className="masonry-layout__panel__header">
                            <img src={sushi} alt="sushi" />
                        </div>
                        <div className="masonry-layout__panel__content">
                            <h4>Новинки меню</h4>
                            <p>Как оно, когда тебе мурлыкает сет, как КОТ В МЕШКЕ? Именно в нем скрывается самая вкусная тайна, познав, которую становишься ее заложником.</p>
                        </div>
                </div>
                <div className="masonry-layout__panel">
                    <div className="masonry-layout__panel__header">
                        <img src={rolls} alt="rolls" />
                    </div>
                    <div className="masonry-layout__panel__content">
                        <h4>Фуджи сет + Cola в подарок</h4>
                        <p>Только по вторникам при заказе НАВЫНОС - второй ролл БЕСПЛАТНО.</p>
                        <p>Каждый второй ролл в чеке - бесплатно! Второй ролл</p>
                        <p>(8 шт.) меньший по стоимости вы получаете в подарок. В заказе должно быть четное кол-во роллов и только по целой порции.</p>
                        <p>*акция не суммируется с другими акциями, скидками</p>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Shares;