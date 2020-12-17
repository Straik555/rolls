import React from "react";

const CustomPageWrapper = ({children}) => (
    <div
        itemProp={'customPageWrapper'}
        itemScope
        className={'custom_page_wrapper'}
    >
        {children}
    </div>
)

export default CustomPageWrapper;