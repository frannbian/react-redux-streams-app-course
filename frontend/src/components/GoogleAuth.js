import React from 'react';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '859156317686-4864i0n5pejbt77bbqaf0kttusou68g5.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return <div>GoogleAuth</div>
    }
}

export default GoogleAuth;