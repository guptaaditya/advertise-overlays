import React from 'react';


export default class AppBody extends React.Component {
    render() {
        return (
            <div className="app-body">
                {this.props.children}
            </div>
        );
    }
}