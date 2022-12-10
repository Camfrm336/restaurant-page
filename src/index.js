import _ from "lodash";
import "./style.css";
import { renderHeader } from "./pages/header";
import { renderBody } from "./pages/mainbody";

const content = document.querySelector(".content");

renderHeader();
document.getElementById("home-tab").href = "#";
document.getElementById("menu-tab").href = "#";
document.getElementById("about-tab").href = "#";
renderBody();
