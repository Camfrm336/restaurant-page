function bodyComponent() {
  let bodyContainer = document.createElement("div");
  bodyContainer.appendChild(createBodyCard("Hello", "This is a test card1"));
  bodyContainer.appendChild(createBodyCard("Hello", "This is a test card2"));
  bodyContainer.appendChild(createBodyCard("Hello", "This is a test card3"));
  bodyContainer.classList.add("card-container");
  return bodyContainer;
}

function createBodyCard(title, content) {
  let cardContainer = document.createElement("div");
  let cardTitle = document.createElement("h1");
  cardTitle.appendChild(document.createTextNode(title));
  let cardContent = document.createElement("p");
  cardContent.appendChild(document.createTextNode(content));
  cardContainer.appendChild(cardTitle);
  cardContainer.appendChild(cardContent);
  cardContainer.classList.add("card");
  return cardContainer;
}

function render() {
  let content = document.getElementById("content");
  content.textContent = "";
  //   content.appendChild(bodyComponent());
  //   let content = document.querySelector(".content");
  //   let bodyContent = bodyComponent();
  //   content.appendChild(bodyContent);
  content.appendChild(bodyComponent());
}

export { render as renderBody };
