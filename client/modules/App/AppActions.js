import callApi from '../../util/apiCaller';

import * as firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyCe4i-rnJB-Xld_Yu9WaTcsSl6V7eSP7es",
  authDomain: "mystarter-29a6b.firebaseapp.com",
  databaseURL: "https://mystarter-29a6b.firebaseio.com",
  projectId: "mystarter-29a6b",
  storageBucket: "",
  messagingSenderId: "850211886725"
});
// Export Constants
export const ACTIONS = {
  TOGGLE_ADD_POST: 'TOGGLE_ADD_POST',
  LOGIN_SUCCEED: 'LOGIN_SUCCEED',
};

export function signInSucceed(user) {
  return {
    type: ACTIONS.LOGIN_SUCCEED,
    user,
  };
}
export function facebookLogin() {
  return (dispatch) => {
    const auth = firebase.auth();
    const provider = new firebase.auth.FacebookAuthProvider();
    provider.setCustomParameters({
      display: 'popup',
    });
    return auth.signInWithPopup(provider).then((user) => {
      console.log('action');
      console.log(user);
      let userInfo = {
        name: user.user.displayName,
        email: user.user.email,
        avatar: user.user.photoURL,
        idSocial: user.user.uid,
        accessToken: user.credential.accessToken,
      };
      return callApi('user/auth', 'post', {userInfo}).then(res => dispatch(signInSucceed(res.user)));
    });
  };
}
