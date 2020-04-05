import { createSelector } from 'reselect';

const getProfile = state => state.profile;

export const getProfileDetails = createSelector(
    getProfile,
    profile => profile.accountDetails
);

export const getIsEditVisible = createSelector(
    getProfile,
    profile => profile.isEditVisible,
);

export const getMembership = createSelector(
    getProfile,
    profile => profile.membership,
);