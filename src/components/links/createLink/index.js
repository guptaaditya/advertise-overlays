import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Modal, Icon } from 'blocks';
import { Input, Form, FormField, Dropdown, Button } from 'blocks';

const friendOptions = [
    {
      key: 'Jenny Hess',
      text: 'Jenny Hess',
      value: 'Jenny Hess',
    },
    {
      key: 'Elliot Fu',
      text: 'Elliot Fu',
      value: 'Elliot Fu',
    },
    {
      key: 'Stevie Feliciano',
      text: 'Stevie Feliciano',
      value: 'Stevie Feliciano',
    },
];  

class CreateLinkForm extends React.Component {
    render() {
        return (
            <Form>
                <FormField inline>
                    <label>Long URL</label>
                    <Input id='longURL' type="text" />
                </FormField>
                <FormField inline>
                    <label>Select overlay</label>
                    <Dropdown placeholder='' fluid selection options={friendOptions} />
                </FormField>
                <br /> <br />
            </Form>
        );
    }
}

function CreatedLinkForm(props) {
    const { url } = props;
    return class extends React.Component {
        render() {
            return (
                <Form>
                    <FormField inline>
                        <label>Short URL</label>
                        <Input readOnly id='shortURL' type="text" value={url} />
                    </FormField>
                </Form>
            );
        }
    }
}

export default class CreateLink extends React.Component {
    state = { modalOpen: false }

    handleClose = () => {
        this.setState({ modalOpen: false });
        this.props.onClose();
    }

    handleOpen = () => this.setState({ modalOpen: true })

    getFooterActions(isDetails) {
        const { onCreate } = this.props;
        return (
            <>
                {!isDetails && <Button color='blue' onClick={onCreate}>Create Link</Button>}
                <Button color='red' onClick={this.handleClose}>Close</Button>
            </>
        )
    }
    
    render() {
        const { createdLink } = this.props;
        const { modalOpen } = this.state;
        const triggerLabel = ( <> <Icon name='linkify' /> Add New Link </>);
        const buttonProperties = {
            floated: 'right',
            icon: true,
            labelPosition: 'left',
            primary: true,
            size: 'small',
            onClick: this.handleOpen,
        };
        const isSuccess = createdLink && createdLink.url;
        const header = isSuccess 
            ? { content: 'Link created', className: 'dark-background' }
            : { content: 'Add new Link', icon: 'plus', className: 'dark-background' };
        const content = isSuccess 
            ? CreatedLinkForm(createdLink)
            : CreateLinkForm
        return (
            <>
                <Modal 
                    open={modalOpen}
                    header={header}  
                    content={content} 
                    trigger={{ label: triggerLabel, ...buttonProperties  }} 
                    actions={this.getFooterActions(isSuccess)}
                />
            </>
        )
    }
}

CreateLink.propTypes = {
    onCreate: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};
CreateLink.defaultProps = {
    onClose: _.noop
}
