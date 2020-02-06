import _ from 'lodash';
import * as actiontypes from './actiontypes';
import CreateOverlay from './create/overlaycreate';

const initOverLay = {
    overlayType: {
        completed: false,
        disabled: false,
    },
    overlayCategory: {
        completed: false,
        disabled: true,
    },
    overlayTemplate: {
        completed: false,
        disabled: true,
    },
    overlayName: {
        completed: false,
        disabled: true,
    }
};
const initialState = {
    data: [],
    createOverlay: {...initOverLay},
};

export default function overlay(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_FETCH_OVERLAYS_SUCCESS:
            return _.defaults({}, { data: action.data }, state);
        case actiontypes.TYPE_SELECTED:
            const createOverlay = _.defaultsDeep({ 
                overlayType: { 
                    completed: true,
                    selected: action.overlayType,
                },   
                overlayCategory: {
                    disabled: false,
                }
            }, state.createOverlay);
            return _.defaultsDeep({}, { createOverlay }, state);
        default:
            return state;
    };
}