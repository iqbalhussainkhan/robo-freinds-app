import React, { PropTypes } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = ({ responseFacebook }) => {
    return (
    	 <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
      	/>
        
    );
};

export default Facebook;
