import { gapi, loadAuth2 } from 'gapi-script';
import { calendarEndDay, calendarStartDay } from '../helpers/correctionTime';

const scopes = 'https://www.googleapis.com/auth/calendar.events';
const clientId = '565477149965-aanvt2v7cvr9v9ifg7o3g4har062jouf.apps.googleusercontent.com';

// todo: check review
async function fetchEvents() {
  let data: any[] = [];
  await new Promise<void>((resolve) => {
    gapi.load('client', async () => {
      gapi.client
        .init({ apiKey: 'AIzaSyCxgDGxNFHv6gAPy_T4POQ0wB2Ou2W4sD4' })
        .then(() => gapi.client.request({ path: `https://www.googleapis.com/calendar/v3/calendars/primary/events?maxResults=5&orderBy=startTime&singleEvents=true&timeMin=${calendarStartDay()}&timeMax=${calendarEndDay()}` }))
        .then((res: any) => {
          resolve();
          data = res.result.items;
        });
    });
  });
  return data;
}

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
  fetchEvents,
  attachSignIn,
  checkAuth,
  exitFoo,
};
