var page = window.location.pathname.split("/").pop().split(".")[0];
var aux = window.location.pathname.split("/");
var to_build = aux.includes("pages") || aux.includes("docs") ? "../" : "./";
var root = window.location.pathname.split("/");
if (!aux.includes("pages")) {
  page = "dashboard";
}

if (document.querySelector("[fixed-plugin]")) {
  loadJS(to_build + "assets/js/fixed-plugin.js", true);
}

if (
  document.querySelector("[navbar-main]") ||
  document.querySelector("[navbar-profile]")
) {
  if (document.querySelector("[navbar-main]")) {
    loadJS(to_build + "assets/js/navbar-sticky.js", true);
  }
  if (document.querySelector("aside")) {
    loadJS(to_build + "assets/js/sidenav-burger.js", true);
  }
}

function loadJS(FILE_URL, async) {
  let dynamicScript = document.createElement("script");

  dynamicScript.setAttribute("src", FILE_URL);
  dynamicScript.setAttribute("type", "text/javascript");
  dynamicScript.setAttribute("async", async);

  document.head.appendChild(dynamicScript);
}

function loadStylesheet(FILE_URL) {
  let dynamicStylesheet = document.createElement("link");

  dynamicStylesheet.setAttribute("href", FILE_URL);
  dynamicStylesheet.setAttribute("type", "text/css");
  dynamicStylesheet.setAttribute("rel", "stylesheet");

  document.head.appendChild(dynamicStylesheet);
}
