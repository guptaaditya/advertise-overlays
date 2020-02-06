import React from 'react';
import { Placeholder, Segment } from "semantic-ui-react";

export default class SitePlaceholder extends React.Component {
    render() {
        const { className } = this.props;
        return (
            <Segment raised className={className}>
                <Placeholder fluid>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line length="full" />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line length="full" />
                        <Placeholder.Line length="medium" />
                        <Placeholder.Line length="full" />
                        <Placeholder.Line length="very long" />
                        <Placeholder.Line length="short" />
                    </Placeholder.Paragraph>
                </Placeholder>
                {this.props.children}
            </Segment>
        );
    }
}