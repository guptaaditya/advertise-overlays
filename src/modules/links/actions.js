import * as actionTypes from './actiontypes';

export function onFetchLinks() {
    return {
        type: actionTypes.FETCH_LINKS
    }
}

export function onFetchLinksSuccess(linksList) {
    return {
        type: actionTypes.ON_FETCH_LINKS_SUCCESS,
        linksList,
    }
}