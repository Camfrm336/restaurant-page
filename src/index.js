import _ from "lodash";
import "./style.css";
import { renderHeader } from "./pages/header";
import { renderBody } from "./pages/mainbody";
import { renderMenu } from "./pages/menu";
import { renderAbout } from "./pages/about";

renderHeader();
renderBody();
const menubtn = document.getElementById("menu-tab");
const homebtn = document.getElementById("home-tab");
const aboutbtn = document.getElementById("about-tab");
homebtn.onclick = function () {
  homebtn.style.color = "gray";
  menubtn.style.color = "white";
  aboutbtn.style.color = "white";
  renderBody();
};
menubtn.onclick = function () {
  homebtn.style.color = "white";
  menubtn.style.color = "gray";
  aboutbtn.style.color = "white";
  renderMenu();
};
aboutbtn.onclick = function () {
  homebtn.style.color = "white";
  menubtn.style.color = "white";
  aboutbtn.style.color = "gray";
  renderAbout();
};

document.getElementById("home-tab").href = "#";
document.getElementById("menu-tab").href = "#";
document.getElementById("about-tab").href = "#";
