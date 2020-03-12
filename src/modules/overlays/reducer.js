import _ from 'lodash';
import * as actiontypes from './actiontypes';
import CreateOverlay from './create/overlaycreate';

const initOverLay = {
    overlayType: {
        active: true,
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
            {
                const createOverlay = _.defaultsDeep({ 
                    overlayType: { 
                        active: false,
                        completed: true,
                        selected: action.overlayType,
                    },   
                    overlayCategory: {
                        disabled: false,
                        active: true,
                    }
                }, state.createOverlay);
                return _.defaultsDeep({}, { createOverlay }, state);
            }
        case actiontypes.CATEGORY_SELECTED:
            {
                const createOverlay = _.defaultsDeep({ 
                    overlayCategory: { 
                        active: false,
                        completed: true,
                        selected: action.overlayCategory,
                    },   
                    overlayTemplate: {
                        disabled: false,
                        active: true,
                    }
                }, state.createOverlay);
                return _.defaultsDeep({}, { createOverlay }, state);
            }
        case actiontypes.TEMPLATE_SELECTED:
            {
                const createOverlay = _.defaultsDeep({ 
                    overlayTemplate: { 
                        active: false,
                        completed: true,
                        selected: action.overlayTemplate,
                    },   
                    overlayName: {
                        disabled: false,
                        active: true,
                    }
                }, state.createOverlay);
                return _.defaultsDeep({}, { createOverlay }, state);
            }
        case actiontypes.NAME_SELECTED:
            {
                const createOverlay = _.defaultsDeep({ 
                    overlayName: { 
                        active: false,
                        completed: true,
                        selected: action.overlayName,
                    }
                }, state.createOverlay);
                return _.defaultsDeep({}, { createOverlay }, state);
            }
        default:
            return state;
    };
}