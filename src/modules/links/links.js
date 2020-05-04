import React from 'react';
import _ from 'lodash';
import LinksList from 'components/links';
import { copyToClipboard } from 'utils/helper';
import { showToast } from 'utils/ui';
import { Link, Icon } from 'blocks';

const dummyLink = {url: 'http://utv.com/gytgt56f6ks'};

export default class Links extends React.Component {
    constructor() {
        super();
        this.cols = [{ 
            align: 'left', 
            label: 'Short URL', 
            labelField: 'shortUrl',
            renderer: this.renderShortUrl,
            className: 'wp-30 flex-fit'
        }, { 
            align: 'left', label: 'Overlay', valueField: 'id', labelField: 'overlayName', 
            className: 'wp-20 flex-fit',
        }, { 
            align: 'left', 
            label: 'Target URL', 
            valueField: 'id', 
            labelField: 'targetUrl', 
            renderer: this.renderTargetUrl,
            className: 'wp-25 flex-fit'
        }, { 
            align: 'left', label: 'Created On', valueField: 'id', labelField: 'createdOn',
            className: 'wp-15 flex-fit'
        }, { 
            align: 'right', 
            label: 'Actions', 
            valueField: 'id',
            className: 'wp-10 flex-fit',
            icons: [
                {
                    icon: 'edit', 
                    color: 'grey',
                },
                {
                    icon: 'delete', 
                    color: 'red',
                }
            ]
        }];
        this.state = {
            createdLink: false
        }
    }
    
    handleCreate = () => {
        this.setState({ createdLink: true });
    };

    handleDetailsSeen = () => {
        this.setState({ createdLink: false });
    }

    componentDidMount() {
        this.props.onFetchLinks();
    }

    onCopy(col, rowData) {
        copyToClipboard(rowData.shortUrl);
        showToast(`Link copied to clipboard`, 'success');
    }

    renderShortUrl = (col, rowData) => {
        return (
            <div className='flexible'>
                <div className='cell'>
                    <Link url={rowData.shortUrl} maxLength={32} />
                </div>
                <div className='cell flexible-centered'>
                    <Icon 
                        title='Copy'
                        onClick={() => this.onCopy(col, rowData)} 
                        className='pointer' 
                        name='copy' 
                        color='blue' 
                    />
                </div>
            </div>
        );
    }

    renderTargetUrl = (col, rowData) => {
        return (
            <div className='text'>
                <a href={col.label} target='_blank'>{col.label}</a>
            </div>
        );
    }

    render() {
        const { linksList } = this.props;
        const { createdLink } = this.state;
        return (
            <>
                <LinksList 
                    createdLink={createdLink ? dummyLink: null } 
                    onCreate={this.handleCreate} cols={this.cols} data={linksList} 
                    onDetailsSeen={this.handleDetailsSeen}
                /> 
            </>
        );
    }
}