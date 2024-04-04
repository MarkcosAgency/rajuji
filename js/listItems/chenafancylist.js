const chenaFancySweetProductsList = [
  {
    name: "GULAB PATTI SANDESH",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description: "Description of Product 1",
  },
  {
    name: "ICE CREAM SANDESH",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "KESAR SANDESH",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "CHAM CHAM MALAI",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "CHAM CHAM KESAR MALAI",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "CHAM CHAM FRUIT MALAI ",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "ABARKHABO",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "CHAM CHAM KESAR",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "COCONUT MALAI CUP",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "RABRI MALPUA",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "PARWAL",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "RASMALAI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "CHENA PAYESH",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "CHENA TOAST",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "KESARIA JELEBI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "IMERTI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
];

function createListCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3 my-2">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
	<div class="card-body text-start">
	  <h5 class="card-title ">${product.name}</h5>
	  <p class="card-text">${product.description}</p>
	</div>
  </div>
  </div> 
  `;
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
renderProducts(chenaFancySweetProductsList, "chenafancysweetsListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(chenaFancySweetProductsList, "chenafancysweetsListsRow");
});
