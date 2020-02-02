import * as actionTypes from './actiontypes';

export function onFetchLinks() {
    return {
        type: actionTypes.FETCH_LINKS
    }
}

export function onFetchLinksSuccess(data) {
    return {
        type: actionTypes.ON_FETCH_LINKS_SUCCESS,
        data,
    }
}