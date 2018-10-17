console.log('welcome to GDK MWS 2018 Participants Code');

const ROOT = window.__PUBLIC_PATH || "/";

fetch(ROOT + 'participants.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
  });