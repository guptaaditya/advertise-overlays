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

export const isPaidMember = createSelector(
    getMembership,
    membership => Boolean(membership.type === 'pro'),
);

export const getUserName = createSelector(
    getProfile,
    profile => profile.user ? profile.user.username : '',
);