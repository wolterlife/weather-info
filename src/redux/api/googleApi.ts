import ApiCalendar from 'react-google-calendar-api';

const config = {
  clientId: '565477149965-aanvt2v7cvr9v9ifg7o3g4har062jouf.apps.googleusercontent.com',
  apiKey: 'AIzaSyCxgDGxNFHv6gAPy_T4POQ0wB2Ou2W4sD4',
  scope: 'https://www.googleapis.com/auth/calendar',
  discoveryDocs: [
    'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
  ],
};

const apiCalendar = new ApiCalendar(config);

export default apiCalendar;
