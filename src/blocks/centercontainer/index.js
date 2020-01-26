import React from 'react';
import { Grid } from 'semantic-ui-react'

export function CenterContainer(props) {
    const { cols = 6} = props;
    return (
        <Grid columns='equal' textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column width={cols}>
                {props.children}
            </Grid.Column>
        </Grid>
    )
}