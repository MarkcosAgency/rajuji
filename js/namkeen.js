// Sample data for namkeen products
const namkeenProducts = [
  {
    name: "BHUJIA",
    photo: "./img/namkeen/2-2-500x500.jpg",
    description: "Description of Product 1",
  },
  {
    name: "JHAL CHANACHUR",
    photo: "./img/namkeen/3-1.jpg",
    description: "Description of Product 1",
  },
  {
    name: "KHATTA MITHA",
    photo: "./img/namkeen/IMG_0353.jpg",
    description: "Description of Product 2",
  },
  {
    name: "KHASTA CHANACHUR",
    photo: "",
    description: "Description of Product 3",
  },

  {
    name: "MOONG DAL",
    photo: "./img/namkeen/IMG_0365.jpg",
    description: "Description of Product 3",
  },
  {
    name: "CORNFLAKS MIXTURE",
    photo: "./img/namkeen/IMG_0367.jpg",
    description: "Description of Product 3",
  },
  {
    name: "PANCHRATAN",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "KAJU DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "BADAM DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "SADA CHIPS",
    photo: "./img/namkeen/IMG_0399.jpg",
    description: "Description of Product 3",
  },
  {
    name: "CHILI POTATO CHIPS",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "KABLI MIX",
    photo: "./img/namkeen/IMG_0401.jpg",
    description: "Description of Product 3",
  },
  {
    name: "DRYFRUIT DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "SAHI DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "AMIR CHANACHUR",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "TOK JHAL MISTI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "ALL IN ONE",
    photo: "./img/namkeen/IMG_0403.jpg",
    description: "Description of Product 3",
  },
  {
    name: "MARWARI BHUJIA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "PAPDI BESAN",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "BHAVNAGRI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "GANTHIA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "MASALA MURI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "KHOKA BHUJIA",
    photo: "",
    description: "Description of Product 3",
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

function createListCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3">
	  <div class="rounded sweets-card">
			 
			  <div
				class="p-4 border text-dark .text-montserrat text-start border-top-0">
				<h4>${product.name}</h4>
				<p class=" text-cocon m-0">
				Description of	${product.name}
				</p>
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
    if (product.photo !== "") {
      const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}

// Render initial set of product cards
renderProducts(namkeenProducts, "namkeensProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(namkeenProducts, "namkeensProductsRow");
});
