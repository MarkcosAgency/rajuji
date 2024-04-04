// Sample data for products
// for  sweets
const chenaSweetProducts = [
  {
    name: "ROSOGOLLA",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description:
      "A delicate and melt-in-your-mouth texture. Known for its mildly sweet & milky flavor.",
  },
  {
    name: "RAJ BHOG",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description:
      "Soft and spongy texture filled with lite keasar and pista. Soked in sugar syrup.",
  },
  {
    name: "GULAB JAMUN SPL ",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description:
      "Deep-fried milk-based dough balls soaked in fragrant sugar syrup.",
  },
  {
    name: "GULAB JAMUN MEDIUM",
    photo: "",
    description:
      "Deep-fried milk-based dough balls soaked in fragrant sugar syrup.",
  },
  {
    name: "GULAB JAMUN MINI",
    photo: "",
    description:
      "Deep-fried milk-based dough balls soaked in fragrant sugar syrup.",
  },
  {
    name: "CHAM CHAM RAW ",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "MILK CAKE",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description:
      "Made from milk & sugar. It has a crumbly yet moist texture with a rich milky flavor.",
  },
  {
    name: "NEW MILK CAKE",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "KALAKAND",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description:
      "Renowned for its grainy texture and rich, milky flavor. It has a perfect balance of sweetness.",
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
renderProducts(chenaSweetProducts, "chenaProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(chenaSweetProducts, "chenaProductsRow");
});
