const maidaSweetProductsList = [
  {
    name: "CHANDRAKALA",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "BALU SAHI",
    photo: "",
    description: "Description of Product 1",
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
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}

// Render initial set of product cards
renderProducts(maidaSweetProductsList, "maidasweetsListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(maidaSweetProductsList, "maidasweetsListsRow");
});
