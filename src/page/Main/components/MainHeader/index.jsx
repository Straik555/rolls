import React from 'react';
import {string} from "prop-types";

const MainHeader = ({title}) => {
    return (
    <div
        itemProp={'main_button'}
        className={'main_button'}
    >
        <div className="header">
            <h3 itemProp = "name">
                {title}
            </h3>
        </div>
    </div>
    )
}

MainHeader.propTypes = {
    title: string.isRequired
}

export default MainHeader;