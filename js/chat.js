// Sample data for products
// for  sandwiches
const chatProducts = [
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

// Function to dynamically create product cards
function createProductCard(product) {
	return `
	  <div class="col-md-6 col-lg-4 col-xl-3">
	  <div class="card w-auto  bg-transparent text-dark" style="">
	<img src='${product.photo}' class="card-img-top" alt="..." style="object-fit:contain">
	<div class="card-body text-start">
	  <h5 class="card-title ">${product.name}</h5>
	  <p class="card-text">${product.description}</p>
	</div>
  </div>
  </div> 
  `;
  }
// Function to render product cards
function renderProducts(products, productRowId) {
  const ProductsRow = document.getElementById(productRowId);
  ProductsRow.innerHTML = ""; // Clear previous content

  // Render product cards
  products.forEach((product) => {
    if (product.photo != "") {
      const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
    }
  });
}

// Render initial set of product cards
renderProducts(chatProducts, "chatProductShow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(chatProducts, "chatProductShow");
});
