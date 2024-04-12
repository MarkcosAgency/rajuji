// Sample data for namkeen products
const maidanamkeenProductsList = [
  {
    name: "MINI KACHORI",
    photo: "./img/namkeen/2-2-500x500.jpg",
    description:
      "A deep-fried pastry filled with a savory stuffing, known for its crispy outer shell & flavorful filling.",
  },
  {
    name: "MINI SINGHARA",
    photo: "./img/namkeen/3-1.jpg",
    description: "Description of Product 1",
  },
  {
    name: "JAWA NAMKIN",
    photo: "./img/namkeen/IMG_0353.jpg",
    description: "Description of Product 2",
  },
  {
    name: "SADA SWALI",
    photo: "",
    description: "A traditional tea times snack of india.",
  },

  {
    name: "METHI SWALI",
    photo: "./img/namkeen/IMG_0365.jpg",
    description: "Description of Product 3",
  },
  {
    name: "LAMBA PAPDI",
    photo: "",
    description:
      "Is a popular indian snack that belongs to the category of crispy and savory foods. It is propular gujraji snack made by handmade. Served with raw papaya bhuji.",
  },
  {
    name: "JAWA NAMKIN",
    photo: "",
    description: "India’s favourite salty tea time snack.",
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
renderProducts(maidanamkeenProductsList, "maidanamkeensListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(maidanamkeenProductsList, "maidanamkeensListsRow");
});
