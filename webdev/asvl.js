import { db } from './db.js'

const renderNav = (db) => `
  <nav id="toTheTop" class="navContainer">
  <h1>Navigasjon: </h1>
  ${db
    .map(
      (data) => `
    <a class="dbNav" href="#${data.name}">${data.name}</a>
  `
    )
    .join('')}
  </nav>
`

const renderStudyInfo = (data, studyInfo) => `
  ${
    data[studyInfo] !== undefined
      ? `
      <h2>${studyInfo}:</h2>
      ${data[studyInfo]
        .map(
          (category) => `
          <section class="${studyInfo}">
            <h3>${category.name}</h3>
            <b>Kilde:</b> <a href="${
              category.url
            }" target="_blank" rel="noopener noreferrer">${category.name}</a>
            <p><b>Oppsummering:</b> ${category.description.join('')}</p>
          </section>
        `
        )
        .join('')}
      `
      : ``
  }
`

document.getElementById('app').innerHTML = `
    ${renderNav(db)}
  ${db
    .map(
      (data) => `
    <details class="category">
      <summary id="${data.name}">${data.name}</summary>
      <a class="dbNav" href="#toTheTop">Toppen av siden</a>
      ${renderStudyInfo(data, 'informasjon')}
      ${renderStudyInfo(data, 'studier')}
      ${renderStudyInfo(data, 'metoder')}
    </details>
  `
    )
    .join('')}
`
