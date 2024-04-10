// Sample data for products
// for  sandwiches
const sandwichProducts = [
	{
		name: "VEG GRILL CHEESE SANDWICH",
		photo: "",
		description: "Description of Product 1",
	},
	{
		name: "VEG CHEESE SANDWICH",
		photo: "",
		description: "Description of Product 1",
	},
	{
		name: "COLE SLOW SANDWICH",
		photo: "",
		description: "Description of Product 2",
	},
	{
		name: "VEG CHEESE BURGER",
		photo: "12.png",
		description: "A symphony of flavors featuring a savory vegetable patty with melted cheese.",
	},
	{
		name: "VEG PIZZA",
		photo: "13.png",
		description: "Hand made base of our veg pizza with fresh tomato, capscicum and cheese.",
	}
];

// Function to dynamically create product cards
function createProductCard(product) {
	return `
	  <div class="col-md-6 col-lg-4 col-xl-3">
	  <div class="card w-auto  bg-transparent text-dark" style="">
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
		if(product.photo !=''){
			const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
		ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
		}
	});
}

// Render initial set of product cards
renderProducts(sandwichProducts, "sandwichesProductShow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderProducts(sandwichProducts, "sandwichesProductShow");
});
