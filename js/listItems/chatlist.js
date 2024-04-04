const chatProductsList = [
  {
    name: "RAJ KACHORI",
    photo: "./img/Rajuji Products/10.png",
    description: "Description of Product 1",
  },
  {
    name: "PAPDI CHAT",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "DAHI VADA",
    photo: "./img/Rajuji Products/11.png",
    description: "Description of Product 2",
  },
];

function createListCard(product) {
  return `
    <div class="col-md-3 m-1 ">
    <div class="card bg-transparent" >
    <div class="card-body">
      <h5 class="card-title text-dark">${product.name}</h5>
    </div>
  </div>
  </div> `;
}

function renderProducts(products, productRowId) {
  const ProductsRow = document.getElementById(productRowId);
  ProductsRow.innerHTML = ""; // Clear previous content

  // Render product cards
  products.forEach((product) => {
    if (product.photo == "") {
      const cardHTML = createListCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
    }
  });
}

// Render initial set of product cards
renderProducts(chatProducts, "chatListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(chatProducts, "chatListsRow");
});
