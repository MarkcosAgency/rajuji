// Sample data for products
// for  sandwiches
const sandwichProductsList = [
  {
    name: "V. GRILL CHEESE SANDWICH",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "VEG CHEESE SANDWICH",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "COLE SLOW SANDWICH",
    photo: "",
    description: "Description of Product 2",
  },
  {
    name: "VEG CHEESE BURGER",
    photo: "./img/Rajuji Products/12.png",
    description: "Description of Product 3",
  },
  {
    name: "VEG PIZZA",
    photo: "./img/Rajuji Products/13.png",
    description: "Description of Product 4",
  },
];

function createListCard(product) {
  return `
    <div class="col-md-3 my-1">
    <div class="card bg-transparent h-100" >
    <div class="card-body">
      <h5 class="card-title text-dark" style="text-align-justify">${product.name}</h5>
    </div>
  </div>
  </div> `;
}

// Function to render product cards
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
renderProducts(sandwichProductsList, "sandwichListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(sandwichProductsList, "sandwichListsRow");
});
