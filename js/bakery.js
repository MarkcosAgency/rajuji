// Sample data for bakery products
// const bakeryProducts = [
//     {
//         name: "Bread 1KG",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Bread 1KG",
//     },
//     {
//         name: "Cake 500 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cake 500 GM",
//     },
//     {
//         name: "Cookies 400 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cookies 400 GM",
//     },
//     {
//         name: "Bread 1KG",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Bread 1KG",
//     },
//     {
//         name: "Cake 500 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cake 500 GM",
//     },
//     {
//         name: "Cookies 400 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cookies 400 GM",
//     }, {
//         name: "Bread 1KG",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Bread 1KG",
//     },
//     {
//         name: "Cake 500 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cake 500 GM",
//     },
//     {
//         name: "Cookies 400 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cookies 400 GM",
//     }, {
//         name: "Bread 1KG",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Bread 1KG",
//     },
//     {
//         name: "Cake 500 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cake 500 GM",
//     },
//     {
//         name: "Cookies 400 GM",
//         photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
//         description: "Description of Cookies 400 GM",
//     },
//     // Add more bakery products as needed
// ];

const bakeryCookies = [
  {
    name: "JEERA TWIST KHARI",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "A savory & flaky pastry flavored with cumin seeds.",
  },
  {
    name: "KAJU PISTA BITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description:
      "A handmade cookie loaded with kaju & pistachios made with lots of love.",
  },
  {
    name: "ATTA BISCUIT",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "A rajasthani handmade cookies made with pure ghee & atta.",
  },
  {
    name: "FRUIT BITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "Description of Bread 1KG",
  },
  {
    name: "BADAM BAITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "Description of Cake 500 GM",
  },
  {
    name: "CHOCO BITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "Description of Cookies 400 GM",
  },
  {
    name: "AJWAINE BITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "Description of Bread 1KG",
  },
  {
    name: "ALMOND STICK",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "Description of Cake 500 GM",
  },
];

// Function to dynamically create product cards
function createProductCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3">
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
  const productsRow = document.getElementById(productRowId);
  productsRow.innerHTML = ""; // Clear previous content

  // Render product cards
  products.forEach((product) => {
    const cardHTML = createProductCard(product);
    productsRow.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Render initial set of product cards
renderProducts(bakeryCookies, "bakeryProductsRow");

// Re-render product cards on window resize event to adjust the number of cards displayed based on screen size
window.addEventListener("resize", function () {
  renderProducts(bakeryCookies, "bakeryProductsRow");
});
