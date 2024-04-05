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
    description:
      "Small, bite-sized snacks made with a variety of dried fruits.",
  },
  {
    name: "BADAM BAITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description:
      "Known for its rich and nutty flavor. It is enjoyed as a dessert or snack.",
  },
  {
    name: "CHOCO BITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "Small, bite-sized treats made primarily with chocolate.",
  },
  {
    name: "AJWAINE BITE",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description:
      "A flavorful & aromatic snack featuring the distinctive taste of ajwain.",
  },
  {
    name: "ALMOND STICK",
    photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
    description: "A delectable treat showcasing the natural goodness & nutty flavor of almonds in a slender & convenient form.",
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
	  <div style="width:"100%"> <p class="card-text" style="-webkit-line-clamp: 3; display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;">${product.description}</p>
    </div>
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
