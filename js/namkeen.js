// Sample data for namkeen products
const namkeenProducts = [
  {
    name: "BHUJIA",
    photo: "bhujia 1.png",
    description:
      "The flavorful & satisfying taste makes it an irresistible choice for a spicy treat",
  },
  {
    name: "JHAL CHANACHUR",
    photo: "3-1.jpg",
    description: "A zesty & spicy snack for all spicy lovers.",
  },
  {
    name: "KHATTA MITHA",
    photo: "IMG_0353.jpg",
    description: "A crispy snack prepared using sweet and sour.",
  },
  {
    name: "KHASTA CHANACHUR",
    photo: "",
    description: "Description of Product 3",
  },

  {
    name: "MOONG DAL",
    photo: "IMG_0365.jpg",
    description: "Fried dal for people who loves sober test.",
  },
  {
    name: "CORNFLAKS MIXTURE",
    photo: "IMG_0367.jpg",
    description:
      "A crunch of cornflakes with dry fruits making it a unique blend of crunch & health.",
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
    photo: "sada chips 1.png",
    description:
      "A pure flavor of thinly sliced potatoes, lightly seasoned & perfectly crisp.",
  },
  {
    name: "CHILI POTATO CHIPS",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "KABLI MIX",
    photo: "IMG_0401.jpg",
    description:
      "A popular snack mix originating from Afghanistan, consisting of a flavorful blend of roasted chickpeas, nuts, seeds, and spices, offering a crunchy and savory taste experience.",
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
    photo: "All in one.png",
    description:
      "A delicious & crunchy snack of all type of indian namkeens mixed together to give it a uniqueness",
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
	<img src='./img/updatedimages/${product.photo}' class="card-img-top" alt="..." style="object-fit:contain">
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
