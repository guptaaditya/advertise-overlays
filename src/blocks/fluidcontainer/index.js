import React from 'react';
import _ from 'lodash';
import { Grid } from 'semantic-ui-react';


export default class FluidContainer extends React.Component {
    render() {
        const { children, colWidth } = this.props;
        const colProps = {};
        if (colWidth) colProps.width = colWidth;
        return (
            <Grid stackable>
                {_.map(children, (child, index) => (<Grid.Column {...colProps}>{child}</Grid.Column>))}
            </Grid>
        );
    }
}