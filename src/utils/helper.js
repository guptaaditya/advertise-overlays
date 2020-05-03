import React from 'react';
const storage = window.localStorage;
const tokenKey = 'v--t-u-s-d';

export default function ComponentWrapper(Component, additionalProps = {}) {
    return function(props) {
        const { children, ...remainingProps } = props;
        const ComponentProps = {
            ...additionalProps,
            ...remainingProps,
        }
        return (
            <Component {...ComponentProps}>
                {children}
            </Component>
        );
    }
}

export function loadStateToken() {
    const token = storage.getItem(tokenKey);
    if(token) {
        return {
            auth: {
                isAuthenticated: true,
                token,
            }
        };
    }
}

export function saveStateToken(state) {
    if(!state.auth.token) {
      return storage.removeItem(tokenKey);
    }
    return storage.setItem(tokenKey, state.auth.token);
}

export function copyToClipboard(text) {
    var tempElement = document.createElement("input");
    document.body.appendChild(tempElement);
    tempElement.value = text;
    tempElement.select();
    document.execCommand("copy");
    tempElement.parentNode.removeChild(tempElement);
}

export function getTextFromClipboard() {
    var tempElement = document.createElement("textarea");
    document.body.appendChild(tempElement);
    tempElement.focus();
    document.execCommand("paste");
    const data = tempElement.textContent;
    tempElement.parentNode.removeChild(tempElement);
    return data;
}
