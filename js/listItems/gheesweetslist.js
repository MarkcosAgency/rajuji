const gheeSweetProductsList = [
  {
    name: "SOAN PAPDI ELAICHI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description: "Description of Product 1",
  },
  {
    name: "SOAN PAPDI DESHI",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "LADDU KESARIA",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "LADDU DESHI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "LADDU KANPURI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "LADDU SPL",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "MOTI PAK",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "DILKHUSAL",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "SATTU",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "DESHI BUNDI",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "BESAN LADDU",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "DRYFRUIT LADDU",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "GOND PAK",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "GOND LADDU",
    photo: "",
    description: "Description of Product 1",
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

// Function to render product cards
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
renderProducts(gheeSweetProductsList, "gheesweetsListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(gheeSweetProductsList, "gheesweetsListsRow");
});
