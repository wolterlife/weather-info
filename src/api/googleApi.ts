import { gapi, loadAuth2 } from 'gapi-script';

const scopes = 'https://www.googleapis.com/auth/calendar.events';
const clientId = '565477149965-aanvt2v7cvr9v9ifg7o3g4har062jouf.apps.googleusercontent.com';

const getEvents = async () => {
  const auth2 = await loadAuth2(gapi, clientId, scopes);
  if (auth2.isSignedIn.get()) {
    console.log(auth2.currentUser.get());
  }
};

export default getEvents;
