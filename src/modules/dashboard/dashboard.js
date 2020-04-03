import React from 'react';

export default class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className='quick-stats' style={{backgroundColor: 'red'}}></div>
                <div className='top-usage'>
                    <div className='top-5-links' style={{backgroundColor: 'orange'}}>

                    </div>
                    <div className='top-5-overlays' style={{backgroundColor: 'green'}}>

                    </div>
                </div>
            </>
        );
    }
}