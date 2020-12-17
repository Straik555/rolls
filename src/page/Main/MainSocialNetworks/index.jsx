import React from 'react'

import './index.scss';
import {mainSocialNetworks} from '../list';

const MainSocialNetworks = ({social = mainSocialNetworks}) => {
    return(
        <div className={'main-social-networks'}>
            {
                social.map(el =>
                    <div
                        key={el.id}
                        className={'main-social-networks_list'}
                    >
                        <div className={'content'} style={{backgroundImage: `url(${el.image})`}}>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default MainSocialNetworks;