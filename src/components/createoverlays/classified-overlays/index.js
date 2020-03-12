import React from 'react';
import _ from 'lodash';
import { FluidContainer } from 'blocks';
import OverlayEntity from '../overlayEntity';

export { default as ShowOverlayType } from './type';
export { default as ShowOverlayCategory } from './category';
export { default as ShowOverlayTemplate } from './template';

export  default function ShowOverlay(props) {
    const { onSelect, entities, display = 'horizontal' } = props;

    let className = 'overlay-card';
    let colSize = 5;
    if (display !== 'horizontal') {
        className = 'overlay-row';
        colSize = 16;
    }

    return (
        <FluidContainer className={className} colWidth={colSize}>
            {_.map(entities, (entity, index) => (
                <OverlayEntity {...entity} onSelect={onSelect} key={index} />
            ))}
        </FluidContainer>
    )
}