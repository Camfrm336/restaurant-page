function aboutComponent() {
  let aboutContainer = document.createElement("div");
  aboutContainer.appendChild(
    createBodyCard(
      "Who We Are",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam voluptatem dolore tempora vitae aut deserunt recusandae, sequi voluptate amet?"
    )
  );
  aboutContainer.appendChild(
    createBodyCard(
      "What We Do",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quam voluptatem dolore tempora vitae aut deserunt recusandae, sequi voluptate amet?"
    )
  );
  aboutContainer.classList.add("about-container");
  return aboutContainer;
}

function createH1Item(text) {
  let h1Item = document.createElement("h1");
  h1Item.appendChild(document.createTextNode(text));
  return h1Item;
}

function createBodyCard(title, content) {
  let cardContainer = document.createElement("div");
  let h1Item = document.createElement("h1");
  h1Item.appendChild(document.createTextNode(title));
  let cardContent = document.createElement("p");
  cardContent.appendChild(document.createTextNode(content));
  cardContainer.appendChild(h1Item);
  cardContainer.appendChild(cardContent);
  cardContainer.classList.add("about-item");
  return cardContainer;
}
function render() {
  let content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(aboutComponent());
}

export { render as renderAbout };
