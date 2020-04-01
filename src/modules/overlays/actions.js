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

export function backToType() {
    return {
        type: actionTypes.BACK_TO_TYPE,
    }
}

export function backToTemplate() {
    return {
        type: actionTypes.BACK_TO_TEMPLATE,
    }
}

export function backToCategory() {
    return {
        type: actionTypes.BACK_TO_CATEGORY,
    }
}

export function loadCustomizeOverlay(overlay) {
    return {
        type: actionTypes.LOAD_CUSTOMIZE_OVERLAY,
        overlay
    }
}

export function onSaveCustomizedOverlay(overlay) {
    return {
        type: actionTypes.SAVE_CUSTOMIZE_OVERLAY_SUCCESS,
        overlay
    }
}