import React, { useState } from 'react';

import './greenTools.scss';

// icons
import phone from '../../assets/components/GreenTools/phone.svg';
import mark from '../../assets/components/GreenTools/mark.svg';
import phoneSmall from '../../assets/components/GreenTools/phone-small.svg';

import youtube from '../../assets/components/GreenTools/youtube.svg';
import telegram from '../../assets/components/GreenTools/telegram.svg';
import instagram from '../../assets/components/GreenTools/instagram.svg';
import post from '../../assets/components/GreenTools/post.svg';
import vk from '../../assets/components/GreenTools/vk.svg';
import viber from '../../assets/components/GreenTools/viber.svg';

const GreenTools = ( props ) => {

    const [ toolsOpened, setToolsOpened ] = useState(false);

    return (
        <>  { toolsOpened ?
            (
                <div className="green-tools-message">
                    <a href="/">
                        <img src={viber} alt={'viber'} height={window.innerWidth > 1060 ? 52 : 40}/>
                    </a>
                    <a href="/">
                        <img src={vk} alt={'vk'} height={window.innerWidth > 1060 ? 52 : 40}/>
                    </a>
                    <a href="/">
                        <img src={post} alt={'post'} height={window.innerWidth > 1060 ? 52 : 40}/>
                    </a>
                    <a href="/#">
                        <img src={phoneSmall} alt={'phone'} height={window.innerWidth > 1060 ? 52 : 40}/>
                    </a>
                    <a href="https://www.instagram.com/24rolls.com.ua/">
                        <img src={instagram} alt={'instagram'} height={window.innerWidth > 1060 ? 52 : 40}/>
                    </a>
                    <a href="/">
                        <img src={telegram} alt={'telegram'} height={window.innerWidth > 1060 ? 52 : 40}/>
                    </a>
                    <a href="https://youtu.be/WlEp-P-5AVs">
                        <img src={youtube} alt={'youtube'} height={window.innerWidth > 1060 ? 52 : 40}/>
                    </a>
                </div>
            ) : null }
            { !toolsOpened ? 
            (
                <img 
                src={phone}  
                height={window.innerWidth > 1060 ? 85 : 55}
                alt={"contacts"}  
                className="green-tools-phone" 
                onClick={() => { setToolsOpened(true) }}
                />
            ) : 
            (
                <img 
                src={mark}  
                height={window.innerWidth > 1060 ? 85 : 55}
                alt={"close"}  
                className="green-tools-phone" 
                onClick={() => { setToolsOpened(false) }}
                />
            ) }
        </>
    );
};

export default GreenTools;