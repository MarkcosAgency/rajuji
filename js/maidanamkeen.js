// Sample data for namkeen products
const maidanamkeenProducts = [
  {
    name: "MINI KACHORI",
    photo: "2-2-500x500.jpg",
    description:
      "A deep-fried pastry filled with a savory stuffing, known for its crispy outer shell & flavorful filling.",
  },
  {
    name: "MINI SINGHARA",
    photo: "3-1.jpg",
    description:
      "Mini sized samosa with dry aromatic filling best for your snack time.",
  },
  {
    name: "JAWA NAMKIN",
    photo: "IMG_0353.jpg",
    description: "India’s favourite salty tea time snack.",
  },
  {
    name: "SADA SWALI",
    photo: "",
    description: "Description of Product 3",
  },

  {
    name: "METHI SWALI",
    photo: "IMG_0365.jpg",
    description: "A savory snack infused with the distinct flavors of fenugreek leaves & aromatic spices.w",
  },
  {
    name: "LAMBA PAPDI",
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
// Function to render product cards
function renderProducts(products, productRowId) {
  const ProductsRow = document.getElementById(productRowId);
  ProductsRow.innerHTML = ""; // Clear previous content

  // Render product cards
  products.forEach((product) => {
    if (product.photo !== "") {
      const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element}
    }
  });
}

// Render initial set of product cards
renderProducts(maidanamkeenProducts, "maidanamkeensProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(maidanamkeenProducts, "maidanamkeensProductsRow");
});
