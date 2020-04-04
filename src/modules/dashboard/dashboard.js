import React from 'react';
import QuickStats from './quickStats';
import Top5Links from './top5Links';
import Top5Overlays from './top5Overlays';
import 'styles/dashboard.scss';

export default class Dashboard extends React.Component {
    render() {
        return (
            <>
                <div className='flex-y flex cell flex-noshrink flex-grow'>
                    <div className='quick-stats flexible cell-w2'>
                        <QuickStats />
                    </div>
                    <div className='top-usage flexible cell-w5'>
                        <div className='top-5-links cell flex-grow flex-noshrink'>
                            <Top5Links />
                        </div>
                        <div className='top-5-overlays cell flex-grow flex-noshrink'>
                            <Top5Overlays />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}