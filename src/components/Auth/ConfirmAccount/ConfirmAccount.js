import React from 'react';
import store from 'store';
import axios from 'axios';

class ConfirmAccount extends React.Component {

    componentDidMount() {
        const token = this.props.match.params.token;
        axios.get(`http://localhost:3000/signup/confirm/${token}`)
            .then(result => {
                if (result.status === 200 ) {
                    const storage = store.get('24rolls');
                    storage.user = {
                        token: token
                    };
                    store.set('24rolls', storage);
                    this.props.history.push('/24ROLLS?log-up-success=true');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
            </>
        );
    }
}

export default ConfirmAccount;