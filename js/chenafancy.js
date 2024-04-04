// Sample data for products
// for  sweets
const chenaFancySweetProducts = [
  {
    name: "GULAB PATTI SANDESH",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description:
      "A delightful fusion of traditional sandesh with rose-infused flavors.",
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
    description: " Malai cham cham is a delicious indian sweet. These milk-based sweets are typically flavored with cardamom and adorned with a layer of malai.",
  },
  {
    name: "CHAM CHAM KESAR MALAI",
    photo: "",
    description: "Is a delicious indian sweet. It has a soft and spongy texture and is soaked in a sweet syrup. With dash of essence of keasr. Truly delightful treat.",
  },
  {
    name: "CHAM CHAM FRUIT MALAI ",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "ABARKHABO",
    photo: "",
    description: "Bet you can't stop at just one!",
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
    description: "Parwal sweets are a unique and innovative take on traditional indian desserts, infusing fresh vegetablewith sugar syrup wth sweet fillings of khoya.",
  },
  {
    name: "RASMALAI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "CHENA PAYESH",
    photo: "",
    description: "Chena kheer is a traditional recipe which is prepared by adding small Bengali rasgullas in thick saffron milk.",
  },
  {
    name: "CHENA TOAST",
    photo: "",
    description: "Creamy and rich toast with a hint of sweetness.",
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

// Function to dynamically create product cards
function createProductCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3 ">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
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
renderProducts(chenaFancySweetProducts, "chenaFancyProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(chenaFancySweetProducts, "chenaFancyProductsRow");
});
