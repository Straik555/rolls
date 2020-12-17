import React from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';
import HeadingBlock from '../../components/HeadingBlock';
import {aboutUsListLeft, aboutUsListRight} from './list';

const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <div
            itemProp={'aboutUs'}
            itemScope
            className={'about-us'}
        >
            <HeadingBlock title={t('aboutUs.title')} svg={true} />
            <div
                itemProp={'mainText'}
                itemScope
                className={'mainText'}
            >
                <div
                    itemProp={'leftBlock'}
                    className={'mainText_left'}
                >
                    {
                        aboutUsListLeft.map(el => <p key={el.id}>{t(`${el.text}`)}</p>)
                    }
                </div>
                <div
                    itemProp={'rightBlock'}
                    className={'mainText_right'
                    }>
                    {
                        aboutUsListRight.map(el => <p key={el.id}>{t(`${el.text}`)}</p>)
                    }
                </div>
            </div>
            <div
                itemProp={'contact'}
                itemScope
                className={'contact'}
            >
                <div
                    itemProp={'header'}
                    className={'contact_header'}
                >
                    <h3 itemProp = "name">
                        {t('aboutUs.contactInformation')}
                    </h3>
                </div>
                <div
                    itemProp={'center'}
                    className={'contact_center'}
                >
                    <span  itemProp={'contact'} itemScope>
                        <pre itemProp = "director">
                            {t('aboutUs.contact.name')}
                            <br />
                            <b itemProp={'phone'}>{t('aboutUs.contact.phone.title')}</b><br />
                            {t('aboutUs.contact.phone.1')}     +380507192424
                            <br />
                            {t('aboutUs.contact.phone.2')}             +380507192424
                        </pre>
                         <br />
                        <b itemProp={'email'}>email:</b> zp24rolls@gmail.com
                    </span>
                </div>
                <div
                    itemProp={'header'}
                    className={'contact_header'}
                >
                    <h3 itemProp={'name'}>
                        {t('aboutUs.offer')}
                    </h3>
                </div>
                <div
                    itemProp={'download'}
                    itemScope
                    className={'contact_download'}
                >
                    <a
                        itemProp={'contract'}
                        href={'http://localhost:3000/'}
                    >
                        {t('aboutUs.offerSave.1')} <br />
                        {t('aboutUs.offerSave.2')}
                    </a>
                </div>
            </div>
            <iframe
                itemType={'url'}
                itemProp={'url'}
                itemScope
                sandbox="allow-scripts allow-same-origin allow-popups-to-escape-sandbox"
                title={'ROLLS24'}
                src={'https://www.youtube.com/embed/WlEp-P-5AVs'}
                frameBorder="0"
                layout="responsive"
            >
            </iframe>
        </div>
    )
}

export default AboutUs;