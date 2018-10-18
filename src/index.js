console.log('welcome to GDK MWS 2018 Participants Code');

const ROOT = window.__PUBLIC_PATH || "/";

fetch(ROOT + 'participants.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(participants) {
    const tableBody = document.getElementsByClassName('table-body')[0]

    participants.forEach((participant, index) => {
      const tableRow = document.createElement('tr')
      const { fasilitator, name, email, firebase_link } = participant

      tableRow.innerHTML = `
        <td>${index + 1}</td>
        <td>${fasilitator}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td><a href="${firebase_link}" target="_blank" rel="noopener">${firebase_link}</a></td>
      `

      tableBody.appendChild(tableRow)

    })
  });