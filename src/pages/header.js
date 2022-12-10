function headerComponent() {
  let headerContainer = document.createElement("div");

  let rightItems = document.createElement("div");
  rightItems.appendChild(createTabItem("Home")).setAttribute("id", "home-tab");

  rightItems.appendChild(createTabItem("Menu")).setAttribute("id", "menu-tab");
  rightItems
    .appendChild(createTabItem("About"))
    .setAttribute("id", "about-tab");
  rightItems.classList.add("right-items");
  headerContainer.appendChild(rightItems);
  headerContainer.classList.add("header-container");
  return headerContainer;
}

function createTabItem(text) {
  let tabItem = document.createElement("a");
  let listItem = document.createElement("li");
  tabItem.appendChild(listItem);
  tabItem.appendChild(document.createTextNode(text));

  return tabItem;
}
function createH1Item(text) {
  let h1Item = document.createElement("h1");
  h1Item.appendChild(document.createTextNode(text));
  return h1Item;
}
function render() {
  document.body.insertBefore(headerComponent(), document.body.firstChild);
}

export { render as renderHeader };
