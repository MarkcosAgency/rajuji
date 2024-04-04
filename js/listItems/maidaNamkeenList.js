// Sample data for namkeen products
const maidanamkeenProductsList = [
  {
    name: "MINI KACHORI",
    photo: "./img/namkeen/2-2-500x500.jpg",
    description: "Description of Product 1",
  },
  {
    name: "MINI SINGHARA",
    photo: "./img/namkeen/3-1.jpg",
    description: "Description of Product 1",
  },
  {
    name: "JAWA NAMKIN",
    photo: "./img/namkeen/IMG_0353.jpg",
    description: "Description of Product 2",
  },
  {
    name: "SADA SWALI",
    photo: "",
    description: "Description of Product 3",
  },

  {
    name: "METHI SWALI",
    photo: "./img/namkeen/IMG_0365.jpg",
    description: "Description of Product 3",
  },
  {
    name: "LAMBA PAPDI",
    photo: "",
    description: "Description of Product 3",
  },
];

function createListCard(product) {
  return `
    <div class="col-md-3 my-1 ">
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
renderProducts(maidanamkeenProductsList, "maidanamkeensListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(maidanamkeenProductsList, "maidanamkeensListsRow");
});
