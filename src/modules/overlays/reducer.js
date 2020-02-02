import _ from 'lodash';
import * as actiontypes from './actiontypes';

const initialState = {
    data: [],
    createOverlay: {
        overlayType: {
            completed: false,
            selected: null,
        },
        overlayCategory: {
            completed: false,
            selected: null,
            disabled: true,
        },
        overlayTemplate: {
            completed: false,
            selected: null,
            disabled: true,
        },
        overlayName: {
            completed: false,
            selected: null,
            disabled: true,
        }
    }
};

export default function overlay(state = initialState, action) {
    switch(action.type) {
        case actiontypes.ON_FETCH_OVERLAYS_SUCCESS:
            return {
                data: action.data,
            };
        default:
            return state;
    };
}