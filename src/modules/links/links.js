import React from 'react';
import _ from 'lodash';
import LinksList from 'components/links';
import { Icon } from 'semantic-ui-react';

const dummyLink = {url: 'http://utv.com/gytgt56f6ks'};

export default class Links extends React.Component {
    constructor() {
        super();
        this.cols = [{ 
            align: 'left', 
            label: 'Short URL', 
            labelField: 'shortUrl',
            width: 3,
            valueField: 'id', 
            icons: [
                {
                    icon: 'copy', 
                    color: 'grey' ,
                    onClick: this.onCopy
                }, {
                    icon: 'external alternate',
                    color: 'grey',
                    link: {
                        hrefField: 'shortUrl', 
                        target: '_blank',
                    },
                }
            ],
        }, { 
            align: 'left', label: 'Overlay used', valueField: 'id', labelField: 'overlayName', width: 5,
        }, { 
            align: 'left', label: 'Created On', valueField: 'id', labelField: 'createdOn'
        }, { 
            align: 'left', 
            label: 'Target URL', 
            valueField: 'id', 
            labelField: 'targetUrl', 
            renderer: this.renderTargetUrl,
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

    onCopy = (col, rowData) => {

    };

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