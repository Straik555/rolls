import React, { useEffect } from 'react';
import store from 'store';


const LogOut = (props) => {

    useEffect(() => {
        const storage = store.get('24rolls');
        delete storage.user;
        store.set('24rolls', storage);

        props.history.push('/24ROLLS?logout');
    }, []);

    return (
        <>
        </>
    );
};

export default LogOut;