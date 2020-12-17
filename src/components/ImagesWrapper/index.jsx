import React from "react";

import './index.scss';

const ImageWrapper = ({
    item,
    margin,
    bottom
}) => {
    return (
        <div
            className={'container'}
            style={{marginBottom: margin}}
        >
            <div
                className={'images-wrapper'}
                style={{backgroundImage: `url(${item.image})`}}
            >
                <div className={'images-wrapper_title'}>
                    <p>
                        {item.description}
                    </p>
                    <h1>
                        {item.title}
                    </h1>
                </div>
                <img src={item.imageBottom} alt="" className={bottom ? 'images-wrapper_second-bottom-image' : 'images-wrapper_bottom-image'}/>
            </div>
        </div>
    )
}

export default ImageWrapper;