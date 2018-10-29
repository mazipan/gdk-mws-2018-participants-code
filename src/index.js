console.log('welcome to GDK MWS 2018 Participants Code');

const ROOT = window.__PUBLIC_PATH || "/";

const sortByNameFn = (a, b) => {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
};

fetch(ROOT + 'participants.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(participants) {
    const tableBody = document.getElementsByClassName('table-body')[0]
    const arraySorted = [...participants].sort(sortByNameFn);

    arraySorted.map((participant, index) => {
      const tableRow = document.createElement('tr')
      const { fasilitator, name, email, firebase_link, isOffline } = participant;

      let classLink = 'unchecked-link';
      let iconCheck = `<svg width="2em" height="2em" viewBox="0 0 512 512" style="fill: red;"><path d="M331.3 308.7L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-15.6-7.1-22.6 0-7.1 7.1-6 16.6 0 22.6l52.7 52.7-52.7 52.7c-6.7 6.7-6.4 16.3 0 22.6 6.4 6.4 16.4 6.2 22.6 0l52.7-52.7 52.7 52.7c6.2 6.2 16.4 6.2 22.6 0 6.3-6.2 6.3-16.4 0-22.6z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path></svg>`;
      
      if (isOffline) {
        classLink = 'checked-link';
        iconCheck = `<svg width="2em" height="2em" viewBox="0 0 512 512" style="fill: #00e679;"><path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"></path><path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path></svg>`;
      }

      tableRow.innerHTML = `
        <td>${index + 1}</td>
        <td class="is-capitalized">${fasilitator}</td>
        <td class="is-capitalized">${name}</td>
        <td>${email}</td>
        <td><a href="${firebase_link}" target="_blank" rel="noopener" title="${name}" class="${classLink}">${firebase_link}</a></td>
        <td>${iconCheck}</td>
      `
      tableBody.appendChild(tableRow);
    })
  });