const bakeryCookies = [
  {
    name: "JEERA TWIST KHARI",
    photo: "Logo_BhikhaaramChandmal_Rajuji.png",
    description: "A savory & flaky pastry flavored with cumin seeds.",
  },
  {
    name: "KAJU PISTA BITE",
    photo: "Kaju Pista Bite.png",
    description:
      "A handmade cookie loaded with kaju & pistachios made with lots of love.",
  },
  {
    name: "ATTA BISCUIT",
    photo: "Logo_BhikhaaramChandmal_Rajuji.png",
    description: "A rajasthani handmade cookies made with pure ghee & atta.",
  },
  {
    name: "FRUIT BITE",
    photo: "Logo_BhikhaaramChandmal_Rajuji.png",
    description:
      "Small, bite-sized snacks made with a variety of dried fruits.",
  },
  {
    name: "BADAM BITE",
    photo: "Badam Bite_1.png",
    description:
      "Known for its rich and nutty flavor. It is enjoyed as a dessert or snack.",
  },
  {
    name: "CHOCO BITe",
    photo: "Choco Bite.png",
    description: "Small, bite-sized treats made primarily with chocolate.",
  },
  {
    name: "AJWAINE BITE",
    photo: "Ajwain BIte.png",
    description: "Description of Product 1",
  },
  {
    name: "ALMOND STICK",
    photo: "Logo_BhikhaaramChandmal_Rajuji.png",
    description:
      "A delectable treat showcasing the natural goodness & nutty flavor of almonds in a slender & convenient form.",
  },
];

// Function to dynamically create product cards
function createProductCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
	<img src='./img/updatedimages/${product.photo}' class="card-img-top" alt="..." style="object-fit:contain;aspect-ratio:1">
	<div class="card-body text-start">
	  <h5 class="card-title ">${product.name}</h5>
	  <div style="width:"100%"> 
    <p class="card-text" style="-webkit-line-clamp: 3; display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;">
    ${product.description}
    </p>
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
