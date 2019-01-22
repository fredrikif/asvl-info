import { db } from "./db.js";

const renderStudyInfo = (data, studyInfo) => `
  ${data[studyInfo]
    .map(
      studyInfo => `
    <div class="studyInfo">
      <h3>${studyInfo.name}</h3>
      <a href="${studyInfo.url}">kilde</a>
      <p> ${studyInfo.description.join("")}
    </div>
  `
    )
    .join("")}
`;

const renderNav = db => `
  <div id="toTheTop" class="navContainer">
  ${db
    .map(
      data => `
    <a class="dbNav" href="#${data.name}">${data.name}</a>
  `
    )
    .join("")}
  </div>
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
