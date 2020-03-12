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

export function selectOverlayType(overlayType) {
    return {
        type: actionTypes.TYPE_SELECTED,
        overlayType,
    }
}

export function selectOverlayCategory(overlayCategory) {
    return {
        type: actionTypes.CATEGORY_SELECTED,
        overlayCategory,
    }
}

export function selectOverlayTemplate(overlayTemplate) {
    return {
        type: actionTypes.TEMPLATE_SELECTED,
        overlayTemplate,
    }
}

export function selectOverlayName(overlayName) {
    return {
        type: actionTypes.NAME_SELECTED,
        overlayName,
    }
}