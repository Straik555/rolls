import React from 'react';

import HeaderForMobile from '../HeaderForMobile/HeaderForMobile';

const wrapperForMobile = (props) => {
    return (
        <>
            <HeaderForMobile />
            <div style={{ marginTop: '80px'}}>
            {props.children}
            </div>
        </>
    );
};

export default wrapperForMobile;
