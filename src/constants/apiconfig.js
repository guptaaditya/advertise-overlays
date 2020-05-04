const host = `${process.env.REACT_APP_API_PROTOCOL}://${process.env.REACT_APP_API_HOSTNAME}:${process.env.REACT_APP_API_PORT}${process.env.REACT_APP_API_BASEPATH}`; 

const API_CONFIG = {
    USER_CREATE: {
        url: `${host}user`,
        type: 'post',
        headers: null,
        isProtected: false,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! You have been successfully registered',
            error: {
                400: 'Please enter a valid Username/Password, and Name',
                409: 'Please login with your username/password as this email is already registered with us',
            },
        }
    },
    USER_UPDATE: {
        url: `${host}user`,
        type: 'put',
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! User has been updated successfully',
            error: {
                401: 'Please retry the forgot password again, your time to reset password has expired',
                403: 'An event has been logged. You are trying to use an invalid verification code to reset the password',
            },
        }
    },
    USER_DETAILS: {
        url: `${host}user`,
        type: 'get',
        hasLoader: false,
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please refresh the page. We have encountered an error',
            },
        }
    },
    USER_LOGIN: {
        url: `${host}user/login`,
        type: 'post',
        headers: null,
        isProtected: false,
        isJson: false,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! Welcome to UTV',
            error: {
                400: 'Please enter your valid Username/Password',
                401: 'Please enter your username and password',
                403: 'Please wait for sometime. You have been blocked due to exceeded number of failed attempts',
            },
        }
    },
    USER_SEND_VERIFICATION_CODE: {
        url: `${host}user/{username}/verification`,
        type: 'get',
        headers: null,
        isProtected: false,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: 'Hi! A verification code has been sent to your email address',
            error: {
                400: 'You are not a registered user. Please register yourself',
            },
        }
    },
    USER_VERIFY: {
        url: `${host}user/verify`,
        type: 'post',
        headers: null,
        isProtected: false,
        isJson: false,
        urlParams: null,
        body: null,
        message: {
            success: 'Please enter a new password!',
            error: {
                400: 'You have entered an invalid verification code',
            },
        }
    },
    USAGE_QUICK_STATS: {
        url: `${host}usage`,
        type: 'get',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please try again after some time. Engineers are at work!'
            },
        }
    },
    PAYOUTS_STATS: {
        url: `${host}/admin/payouts`,
        type: 'get',
        headers: null,
        isProtected: true,
        isJson: true,
        urlParams: null,
        body: null,
        message: {
            success: '',
            error: {
                500: 'Please try again after some time. Engineers are at work!'
            },
        }
    }
};

export default API_CONFIG;