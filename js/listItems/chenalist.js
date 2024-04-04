// Sample data for products
// for  sweets
const chenaSweetProductsList = [
  {
    name: "ROSOGOLLA",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description: "Description of Product 1",
  },
  {
    name: "RAJ BHOG",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "GULAB JAMUN SPL ",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "GULAB JAMUN MEDIUM",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "GULAB JAMUN MINI",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "CHAM CHAM RAW ",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "MILK CAKE",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "NEW MILK CAKE",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "KALAKAND",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "GHEE KALAKAND",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "MATHURA PEDA",
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
renderProducts(chenaSweetProductsList, "chenasweetsListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(chenaSweetProductsList, "chenasweetsListsRow");
});
