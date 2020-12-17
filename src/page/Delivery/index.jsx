import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';
import {
    dishesList,
    advantageList,
    bonusList
} from './list';
import HeadingBlock from '../../components/HeadingBlock';

const Delivery = () => {
    const {t} = useTranslation();
    return (
        <div
            itemProp={'delivery'}
            className={'delivery'}
        >
            <HeadingBlock
                title={'Доставка'}
                svg={true}
            />
            <div
                className={'description'}
                itemProp={'description'}
                itemScope
            >
                <div
                    itemProp={'descriptionBlock'}
                    className={'description_block-head'}
                >
                    <h3 itemProp={'descriptionBlockName'}>
                        {t('delivery.button.1')}
                    </h3>
                </div>
            </div>
            <div
                itemProp={'mainText'}
                itemScope
                className={'mainText'}
            >
                <div
                    itemProp={'mainTextLeft'}
                    itemScope
                    className={'mainText_left'}
                >
                    <p itemProp={'deliveryText'}>
                        {t('delivery.left.1')}<br />
                        {t('delivery.left.2')}
                    </p>
                    <p itemProp={'deliveryText'}>
                        {t('delivery.left.3')}
                    </p>
                </div>
                <div
                    itemProp={'mainTextRight'}
                    className={'mainText_right'}
                >
                    <p itemProp={'deliveryText'}>
                        {t('delivery.right.1')}
                    </p>
                    <p itemProp={'deliveryText'}>
                        {t('delivery.right.2')}
                    </p>
                </div>
            </div>
            <div
                itemProp={'dishes'}
                itemScope
                className={'dishes'}>
                <div
                    itemProp={'dishesContent'}
                    className={'dishes_content'}
                >
                    <p itemProp={'dishesText'}>
                        {t('delivery.dishes.title.1')}<br />
                        <strong>
                            {t('delivery.dishes.title.2')}
                        </strong>
                    </p>
                    {
                        dishesList.map(el =>
                            <li
                                itemProp={'dishesContentList'}
                                key={el.id}
                            >
                                {t(`${el.name}`)}
                            </li>
                        )
                    }
                </div>
            </div>
            <div
                className={'description'}
                itemProp={'description'}
                itemScope
            >
                <div
                    itemProp={'descriptionBlock'}
                    className={'description_block-head'}
                >
                    <h3 itemProp={'descriptionBlockName'}>
                        {t('delivery.button.2')}
                    </h3>
                </div>
            </div>
            <div
                itemProp={'advantage'}
                itemScope
                className={'advantage'}>
                <div
                    itemProp={'advantageNumber'}
                    className={'advantage_number'}
                >
                    {
                        advantageList.map(el =>
                            <li
                                itemProp={'advantageNumberBlock'}
                                key={el.id}
                                className={'advantage_number_block'}
                            >
                                <h1 itemProp={'advantageName'}>{el.title}</h1>
                                <div
                                    itemProp={'advantageNumberBlockList'}
                                    className={'advantage_number_block_list'}
                                >
                                    <img
                                        itemProp={'img'}
                                        itemType={'url'}
                                        src={el.image}
                                        alt=""
                                    />
                                    <p itemProp={'advantageNumberText'}>{t(`${el.text}`)}</p>
                                </div>
                            </li>
                        )
                    }
                </div>
            </div>
            <div
                className={'description'}
                itemProp={'description'}
                itemScope
            >
                <div
                    itemProp={'descriptionBlock'}
                    className={'description_block-head'}
                >
                    <h3 itemProp={'descriptionBlockName'}>
                        {t('delivery.button.3')}
                    </h3>
                </div>
            </div>
            <div
                itemProp={'bonus'}
                itemScope
                className={'bonus'}
            >
                <div
                    itemProp={'bonusTitle'}
                    className={'bonus_title'}
                >
                    <h1 itemProp={'bonusTitleName'}>
                        {t('delivery.presents.title')}
                    </h1>
                </div>
                <div
                    itemProp={'bonusRolls'}
                    className={'bonus_rolls'}
                >
                    {
                        bonusList.map(el =>
                            <li
                                itemProp={'bonusRollsBlock'}
                                itemScope
                                className={'bonus_rolls_block'}
                                key={el.id}
                                style={{backgroundImage: `url(${el.image})`}}
                            >
                                <div
                                    itemProp={'bonusRollsBlockList'}
                                    className={'bonus_rolls_block_list'}
                                >
                                    <h1 itemProp={'bonusRollsBlockListTitle'}>{t(`${el.title}`)}</h1>
                                    <p itemProp={'bonusRollsBlockListText'}>{t(`${el.text}`)}</p>
                                </div>
                            </li>
                        )
                    }
                </div>
            </div>
            <div
                className={'description'}
                itemProp={'description'}
                itemScope
            >
                <div
                    itemProp={'descriptionBlock'}
                    className={'description_block-head'}
                >
                    <h3 itemProp={'descriptionBlockName'}>
                        Зона доставки
                    </h3>
                </div>
            </div>
            <div
                itemProp={'footer'}
                itemScope
                className={'footer'}
            >
                <div
                    className={'footer_inform'}
                    itemProp={'footerInform'}
                >
                    <p itemProp={'footerInformText'}>
                        {t('delivery.presents.area')}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Delivery;