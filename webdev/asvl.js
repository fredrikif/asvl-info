import { db } from "./db.js";

/*
  Todo: renderStudyInfo crashes app if
  only contains "info" or "study". Check 
  if both exist, otherwise pass, 
  ternary operator fixes this?
*/

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
  ${data[studyInfo]
    .map(
      studyInfo => `
    <div class="studyInfo">
      <h3>${studyInfo.name}</h3>
      <b>Kilde:</b> <a href="${
        studyInfo.url
      }" target="_blank" rel="noopener noreferrer">${studyInfo.name}</a>
      <p><b>Oppsummering:</b> ${studyInfo.description.join("")}</p>
    </div>
  `
    )
    .join("")}
`;

document.getElementById("app").innerHTML = `
    ${renderNav(db)}
  ${db
    .map(
      data => `
    <div class="category">
      <h1 id="${data.name}">${data.name}</h1>
      <a class="dbNav" href="#toTheTop">Toppen av siden</a>
      ${renderStudyInfo(data, "info")}
      ${renderStudyInfo(data, "studies")}
    </div>
  `
    )
    .join("")}
`;
