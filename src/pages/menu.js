function menuComponent() {
  let menuContainer = document.createElement("div");
  menuContainer.appendChild(
    createBodyCard(
      "Item one",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam voluptatem dolore tempora vitae aut deserunt recusandae, sequi voluptate amet?"
    )
  );
  menuContainer.appendChild(
    createBodyCard(
      "Item two",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam voluptatem dolore tempora vitae aut deserunt recusandae, sequi voluptate amet?"
    )
  );
  menuContainer.appendChild(
    createBodyCard(
      "Item three",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam voluptatem dolore tempora vitae aut deserunt recusandae, sequi voluptate amet?"
    )
  );
  menuContainer.classList.add("menu-container");
  return menuContainer;
}

function createBodyCard(title, content) {
  let cardContainer = document.createElement("div");
  let cardTitle = document.createElement("h1");
  cardTitle.appendChild(document.createTextNode(title));
  let cardContent = document.createElement("p");
  cardContent.appendChild(document.createTextNode(content));
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardContent);
  cardContainer.classList.add("menu-item");
  return cardContainer;
}

function render() {
  let content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(menuComponent());
}

export { render as renderMenu };
