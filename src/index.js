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
      const { fasilitator, name, email, firebase_link } = participant
      tableRow.innerHTML = `
        <td>${index + 1}</td>
        <td class="is-capitalized">${fasilitator}</td>
        <td class="is-capitalized">${name}</td>
        <td>${email}</td>
        <td><a href="${firebase_link}" target="_blank" rel="noopener" title="${name}">${firebase_link}</a></td>
      `
      tableBody.appendChild(tableRow);
    })
  });