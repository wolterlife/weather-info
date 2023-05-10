import { gapi, loadAuth2 } from 'gapi-script';

const scopes = 'https://www.googleapis.com/auth/calendar.events';
const clientId = '565477149965-aanvt2v7cvr9v9ifg7o3g4har062jouf.apps.googleusercontent.com';

const attachSignIn = async (setAuth: Function) => {
  const auth2 = await loadAuth2(gapi, clientId, scopes);
  auth2.attachClickHandler(
    document.getElementById('loginButton'),
    {},
    () => {
      setAuth(true);
    },
    (error: object) => {
      console.log(JSON.stringify(error));
    },
  );
};

const checkAuth = async (setAuth: Function) => {
  const auth2 = await loadAuth2(gapi, clientId, scopes);
  if (auth2.isSignedIn.get()) {
    setAuth(true);
  }
};

const exitFoo = (setAuth: Function) => {
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    setAuth(false);
  });
};

export {
  exitFoo, attachSignIn, checkAuth,
};
