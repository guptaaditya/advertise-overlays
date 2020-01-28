import React from 'react';
const storage = window.localStorage;
const tokenKey = 'utv.auth.hash';

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
                isAuthenticated: true
            }
        };
    }
}

export function saveStateToken(state) {
  storage.setItem(tokenKey, state.auth.token);
}