// Sample data for products
// for  sweets
const chenaSweetProductsList = [
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
    description:
      "Cham Cham is a beloved Bengali sweet, crafted from paneer, khoya, soaked in sugar syrup, and often flavored with cardamom. It boasts a soft, melt-in-the-mouth texture, perfect for celebrations.",
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
    description:
      "Made from milk & sugar. It has a crumbly yet moist texture with a rich milky flavor.",
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
    description:
      "Renowned for its grainy texture and rich and milky flavor, made out of pure ghee. It has a perfect balance of sweetness.",
  },
  {
    name: "MATHURA PEDA",
    photo: "",
    description:
      " Is a traditional indian sweet that originated in the city of mathura. Made from milk with lot of patience.",
  },
];

function createListCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3 my-2">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
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
