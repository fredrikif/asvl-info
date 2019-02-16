import { db } from "./db.js";

const renderNav = db => `
  <div id="toTheTop" class="navContainer">
  <h1>Navigasjon: </h1>
  ${db
    .map(
      data => `
    <a class="dbNav" href="#${data.name}">${data.name}</a>
  `
    )
    .join("")}
  </div>
`;

const renderStudyInfo = (data, studyInfo) => `
  ${
    data[studyInfo] !== undefined
      ? `
      <h2>${studyInfo}:</h2>
      ${data[studyInfo]
        .map(
          category => `
          <section class="${studyInfo}">
            <h3>${category.name}</h3>
            <b>Kilde:</b> <a href="${
              category.url
            }" target="_blank" rel="noopener noreferrer">${category.name}</a>
            <p><b>Oppsummering:</b> ${category.description.join("")}</p>
          </section>
        `
        )
        .join("")}
      `
      : ``
  }
`;

document.getElementById("app").innerHTML = `
    ${renderNav(db)}
  ${db
    .map(
      data => `
    <article class="category">
      <h1 id="${data.name}">${data.name}</h1>
      <a class="dbNav" href="#toTheTop">Toppen av siden</a>
      ${renderStudyInfo(data, "informasjon")}
      ${renderStudyInfo(data, "studier")}
      ${renderStudyInfo(data, "metoder")}
    </article>
  `
    )
    .join("")}
`;
