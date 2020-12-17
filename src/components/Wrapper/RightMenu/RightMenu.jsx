import React from 'react';
import { withTranslation } from "react-i18next";

import Order from '../../Order/Order';

class RightMenu extends React.Component {
    render() {
        return (
            <>
                <Order />
            </>
        );
    }
};

export default withTranslation()(RightMenu);