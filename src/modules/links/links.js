import React from 'react';
import _ from 'lodash';
import LinksList from 'components/links';
import { Icon } from 'semantic-ui-react';
import { copyToClipboard } from 'utils/helper';
import { showToast } from 'utils/ui';

const dummyLink = {url: 'http://utv.com/gytgt56f6ks'};

export default class Links extends React.Component {
    constructor() {
        super();
        this.cols = [{ 
            align: 'left', 
            label: 'Short URL', 
            labelField: 'shortUrl',
            width: 3,
            renderer: this.renderShortUrl,
        }, { 
            align: 'left', label: 'Overlay', valueField: 'id', labelField: 'overlayName', width: 5,
        }, { 
            align: 'left', 
            label: 'Target URL', 
            valueField: 'id', 
            labelField: 'targetUrl', 
            renderer: this.renderTargetUrl,
        }, { 
            align: 'left', label: 'Created On', valueField: 'id', labelField: 'createdOn'
        }, { 
            align: 'right', 
            label: 'Actions', 
            valueField: 'id',
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
                    <a href={rowData.shortUrl} target='_blank'>{rowData.shortUrl}</a>
                </div>
                <div className='cell flexible-centered'>
                    <Icon 
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
        const { data } = this.props;
        const { createdLink } = this.state;
        return (
            <>
                <LinksList 
                    createdLink={createdLink ? dummyLink: null } 
                    onCreate={this.handleCreate} cols={this.cols} data={data} 
                    onDetailsSeen={this.handleDetailsSeen}
                /> 
            </>
        );
    }
}