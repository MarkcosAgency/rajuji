const bakeryCookieProductsLists = [
  {
    name: "JEERA TWIST KHARI",
    photo: "",
    description:
      "A savory Indian pastry made from puff pastry dough flavored with cumin seeds (jeera), offering a crispy texture and a delightful twist on traditional Khari biscuits.",
  },
  {
    name: "KAJU PISTA BITE",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description: "Description of Product 1",
  },
  {
    name: "ATTA BISCUIT",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "FRUIT BITE",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "BADAM BAITE",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "CHOCO BITE",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description: "Description of Product 1",
  },
  {
    name: "AJWAINE BITE",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "ALMOND STICK",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description: "Description of Product 1",
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
renderProducts(bakeryCookieProductsLists, "bakeryCookiesListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(bakeryCookieProductsLists, "bakeryCookiesListsRow");
});
