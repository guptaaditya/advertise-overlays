import { takeLatest, put } from 'redux-tale/es/effects';
import * as redirectActions from 'modules/redirect/actions';
import * as authActions from 'modules/router/actions';
import * as actionTypes from './actiontypes';
import * as actions from './actions';
import { showToast } from 'utils/ui';

function* onLogin({ username, password, redirectUrl }) {
    try {
        yield Promise.resolve(true);
        yield put(authActions.onLoginSuccess());
        yield put(redirectActions.redirectTo(redirectUrl));
    } catch (error) {
        console.log(error);
    }
}

function* onSignup({ redirectUrl, ...userInputs }) {
    try {
        yield Promise.resolve(true);
        yield onLogin({ ...userInputs, redirectUrl });
    } catch (error) {
        console.log(error);
    }
}

function* onForgotPassword({ redirectUrl, useremail }) {
    try {
        yield Promise.resolve(true);
        yield put(actions.onForgotPasswordSuccess(useremail));
        showToast(`A Verification code has been sent to ${useremail}.`, 'success');
        yield put(redirectActions.redirectTo(redirectUrl));
    } catch (error) {
        console.log(error);
    }
}

function* onResendVerificationCode({ useremail }) {
    try {
        yield Promise.resolve(true);
        showToast(`Verification code resent to ${useremail}`, 'success');
    } catch (error) {
        console.log(error);
    }
}

function* onVerificationCodeSubmit({ code, redirectUrl }) {
    try {
        yield Promise.resolve(true);
        yield put(redirectActions.redirectTo(redirectUrl));
    } catch (error) {
        console.log(error);
    }
}

function* onResetPassword({ redirectUrl, ...userInputs }) {
    try {
        yield Promise.resolve(true);
        // yield put(authActions.onResetPasswordSuccess());
        yield put(redirectActions.redirectTo(redirectUrl));
        showToast(`Your password has been changed successfully.`, 'success');
    } catch (error) {
        console.log(error);
    }
}

const onLoginSaga = takeLatest(actionTypes.ON_LOGIN, onLogin);
const onSignupSaga = takeLatest(actionTypes.ON_SIGNUP, onSignup);
const onForgotPasswordSaga = takeLatest(actionTypes.ON_FORGOT_PASSWORD, onForgotPassword);
const onResendVerificationCodeSaga = takeLatest(actionTypes.ON_RESEND_VERIFICATION_CODE, onResendVerificationCode);
const onVerificationCodeSubmitSaga = takeLatest(actionTypes.ON_VERIFICATION_CODE_SUBMIT, onVerificationCodeSubmit);
const onResetPasswordSaga = takeLatest(actionTypes.ON_RESET_PASSWORD, onResetPassword);

export default [
    onLoginSaga,
    onSignupSaga,
    onForgotPasswordSaga,
    onResendVerificationCodeSaga,
    onVerificationCodeSubmitSaga,
    onResetPasswordSaga
];