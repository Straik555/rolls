import React, { useState } from 'react';

import LogIn from '../../components/Auth/LogIn';
import LogUp from '../../components/Auth/logUp';
import RestorePassword from '../../components/Auth/RestorePassword/RestorePassword';

const MobileLogIn = ( props ) => {
    const [authMode, setAuthMode ] = useState('log-in');

    const changeAuthModeToLogIn = () => {
        setAuthMode('log-in');
    };

    const changeAuthModeToLogUp = () => {
        setAuthMode('log-up');
    }

    const changeModeToRestore = () => {
        setAuthMode('restore-pass');
    }


    return (
        <div style={{paddingTop: '50px'}}>
            {authMode === 'log-in' && 
            (
                <LogIn 
                {...props}
                switchMode={changeAuthModeToLogUp} 
                restoreMode={changeModeToRestore}/>
            )}
            {authMode === 'log-up' && 
            (
                <LogUp
                {...props} 
                switchMode={changeAuthModeToLogIn} />
            )}
            {authMode === 'restore-pass' && 
            (
                <RestorePassword
                {...props} 
                switchMode={changeAuthModeToLogIn} />
            )}
        </div>
    );
};

export default MobileLogIn;