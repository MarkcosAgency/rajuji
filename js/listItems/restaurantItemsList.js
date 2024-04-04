const restaurantProductsList = [
  {
    name: "CHOLA BHATURA",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "RADHABALLVI",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "SABJI KHASTA  KACHORI",
    photo: "",
    description: "Description of Product 2",
  },
  {
    name: "IDLY SAMBAR CHATNI",
    photo: "",
    description: "Description of Product 3",
  },

  {
    name: "PLAIN DOSA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "MASALA DOSA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "CHOWMEIN",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "NAAN",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "MASALA KULCHA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "FALKA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "PULAO",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "MIX VEG PANEER",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "DAL MAKHANI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "DAL FRY",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "RAITA",
    photo: "",
    description: "Description of Product 3",
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
renderProducts(restaurantProductsList, "restaurantListRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(restaurantProductsList, "restaurantListRow");
});
