import React from 'react';

export default function ComponentWrapper(Component) {
    return function(props) {
        return (
            <Component {...props}>
                {props.children}
            </Component>
        );
    }
}