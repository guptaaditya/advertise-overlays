import { takeLatest, put } from 'redux-tale/es/effects';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import { showToast } from 'utils/ui';


const serverData = [
    { 
        id: 1, 
        shortUrl: 'http://utv.com/v/sduh44hhuysq', 
        targetUrl: 'https://google.com', 
        overlayName: 'Commercials mineral water', 
        createdOn: '12/30/2019 09:57 AM' 
    },
    { 
        id: 2, 
        shortUrl: 'http://utv.com/v/tfiugfuygu54', 
        targetUrl: 'https://google.com', 
        overlayName: 'Commercials chocolates', 
        createdOn: '11/02/2019 09:57 AM' 
    },
    { 
        id: 3, 
        shortUrl: 'http://utv.com/v/kopo678776fl', 
        targetUrl: 'https://codeacademy.com/learn-to-code-fast', 
        overlayName: 'Learn coding in 300 minutes', 
        createdOn: '8/9/2018 09:57 AM' 
    },
    { 
        id: 4, 
        shortUrl: 'http://utv.com/v/pkpkpmsd35ds', 
        targetUrl: 'https://wp.com/bloggingweb/abc/create-to-experience', 
        overlayName: 'Donate for a cause', 
        createdOn: '3/30/2018 09:57 AM' 
    },
    
];

function* onFetchLinks() {
    try {
        const result = yield Promise.resolve(serverData);
        yield put(actions.onFetchLinksSuccess(result));
    } catch (error) {
        console.log(error);
    }
}

const onFetchLinksSaga = takeLatest(actionTypes.FETCH_LINKS, onFetchLinks);

export default [
    onFetchLinksSaga,
];