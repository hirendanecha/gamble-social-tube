const loginUrl = 'https://gamble.social/login';
const logoutUrl = 'https://gamble.social/logout';
const frontendUrl = 'https://tube.gamble.social/';
const backendUrl =  'https://api.gamble.social/';

// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';
const wasabiUrl = 'https://organic-dating.s3.wasabisys.com/'


export const environment = {
  production: false,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.gamble.social',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://meet.facetime.tube/',
  logoutUrl: logoutUrl

};

