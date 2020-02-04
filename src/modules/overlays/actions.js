import * as actionTypes from './actiontypes';

export function onFetchOverlays() {
    return {
        type: actionTypes.FETCH_OVERLAYS
    }
}

export function onFetchOverlaysSuccess(data) {
    return {
        type: actionTypes.ON_FETCH_OVERLAYS_SUCCESS,
        data,
    }
}

export function selectedPropertyValue(property, value) {
    
}