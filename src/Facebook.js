import React, { PropTypes } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = ({ responseFacebook }) => {
    return (
    	 <FacebookLogin
        appId="478505559392243"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      	/>
        
    );
};

export default Facebook;
