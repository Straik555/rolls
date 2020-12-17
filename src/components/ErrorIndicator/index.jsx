import React, {Component} from 'react';

import './index.scss';

export default class ErrorIndicator extends Component{
    render(){
        return(
            <div className="error-indicator">
                <span>
                    something has gone terribly wrong
                </span>
                <span>
                    (but we are already fixing it)
                </span>
            </div>
        )
    }
}