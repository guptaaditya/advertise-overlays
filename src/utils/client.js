import _ from 'lodash';
import { getuserTokenFromStore } from 'modules/router/selectors';

function getAuthHeaders() {
    const userToken = getuserTokenFromStore();
    if (userToken) {
        return {
            Authorization: `Bearer ${userToken}`
        };
    }
    return false;
}

function prepareHeaders(userProvidedHeaders, isProtected) {
    let headers = {
        'Content-Type': 'application/json',
    }; 
    if (isProtected) {
        const authHeaders = getAuthHeaders();
        if (!authHeaders) throw { message: 'User not authenticated' };
        headers = {
            ...headers,
            ...authHeaders,
        };
    }
    return {
        ...headers,
        ...userProvidedHeaders
    };
}

function parameterizeUrl(url, urlParams = {}) {
    let sanitizedUrl = url;
    _.forEach(urlParams, (paramValue, paramName) => {
        sanitizedUrl = _.replace(sanitizedUrl, `{${paramName}}`, paramValue);
    });
    return sanitizedUrl;
}

function callAPI(
    method, userProvidedHeaders, isProtected, url, urlParams, isJson, body = null, 
    hasLoader = true,
    ) {
    const headers = prepareHeaders(userProvidedHeaders, isProtected);
    const parameterizedUrl = parameterizeUrl(url, urlParams);
    const optionalParams = {};
    if (body) {
        optionalParams.body = JSON.stringify(body)
    }

    //Fire onStart of all subscribers
    if (hasLoader) _.forEach(client.subscribers, ({ onStart }) => onStart());
    return fetch(parameterizedUrl, {
        method,
        headers,
        ...optionalParams
    }).then(response => {
        _.forEach(client.subscribers, ({ onComplete }) => onComplete(response));
        if (response.status >= 200 && response.status < 300) {
            _.forEach(client.subscribers, ({ onSuccess }) => onSuccess(response));
            if (isJson) return response.json();
            return response.text();
        } else {
            _.forEach(client.subscribers, ({ onError }) => onError(onError));
            throw { status: response.status, message: response.statusText };
        }
    });
}

/* Params for a client method: 
    url, 
    headers, 
    isProtected = true, 
    isJson = true, 
    urlParams = null, 
    body = {}
*/
const nop = _.noop;

const client = {
    subscribers: {},
    get: ({ 
        url, headers = {}, isProtected = true, urlParams = {}, isJson = true, hasLoader 
    }) => {
        return callAPI('GET', headers, isProtected, url, urlParams, isJson, null, hasLoader);
    },
    post: ({ 
        url, headers, isProtected = true, isJson = true, urlParams = null, body = {}, hasLoader 
    }) => {
        return callAPI('POST', headers, isProtected, url, urlParams, isJson, body, hasLoader);
    },
    put: ({ 
        url, headers, isProtected = true, isJson = true, urlParams = null, body = {}, hasLoader 
    }) => {
        return callAPI('PUT', headers, isProtected, url, urlParams, isJson, body, hasLoader);
    },
    delete: ({ 
        url, headers = {}, isProtected = true, urlParams = {}, isJson = true, hasLoader
    }) => {
        return callAPI('DELETE', headers, isProtected, url, urlParams, isJson, null, hasLoader);
    },
    subscribe: ({ onStart = nop, onError = nop, onSuccess = nop, onComplete = nop }) => {
        const subscribersCount = _.values(client.subscribers);
        const subscriberIndex = `index-${subscribersCount}`;
        client.subscribers[subscriberIndex] = { onStart, onError, onSuccess, onComplete };
        return () => {
            delete client.subscribers[subscriberIndex];
        };
    },
}
export default client;