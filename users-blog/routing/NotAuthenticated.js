import React from 'react';
import {Redirect, Route} from 'react-router-dom';


const NotAuthenticated = ({component: Component, ...rest}) => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('Component!!', Component)
    return (
        <Route {...rest} render={props => (
            currentUser ? (
                <Redirect to={{
                    pathname: '/blog',
                    state: {from: props.location}
                }}
                />

            ) : (
                <Component {...props} />
            )
        )}/>
    );
}

export default NotAuthenticated;
