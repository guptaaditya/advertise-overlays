import _ from 'lodash';
import * as actiontypes from './actiontypes';

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
            return {
                data: action.data,
            };
        default:
            return state;
    };
}