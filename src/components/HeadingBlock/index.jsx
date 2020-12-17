import React from 'react';

import './index.scss';
import deliverSvg from "../../assets/components/HeadingBlog/deliverSvg.svg";

const HeadingBlock = ({title, svg}) => {
    return (
        <div
            itemProp={'headingBlock'}
            className="heading-blog"
        >
            <h1 itemProp = "name">
                {title}
            </h1>
            {
                svg && (
                    <div
                        className={'heading-blog_svg'}
                        itemProp={'blockSvg'}
                        itemScope
                    >
                        <amp-img
                            itemProp={'img'}
                            itemType={'url'}
                            src={deliverSvg}
                            alt=""
                            width={'300'}
                            height={'50'}
                        >
                        </amp-img>
                    </div>
                )
            }
        </div>
    )
}

export default HeadingBlock;