import React from 'react';
import {Redirect, Route} from 'react-router-dom';



const Authorization = ({component: Component, permission, ...rest}) => { 
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // const roles = ['admin', 'editor'];
    console.log('Component auth !!',Component)
    
    return (

        <Route {...rest} render={props => (
            currentUser ? ( 
                        <Component {...props} />
                    ) :  (
                <Redirect to={{
                    pathname: '/login',
                    state: {from: props.location}
                }}/>
            )
        )}/>
    );
}

export default Authorization;
