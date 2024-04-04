// Sample data for namkeen products
const restaurantProducts = [
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
	},{
		name: "RAITA",
		photo: "",
		description: "Description of Product 3",
	}
];

// Function to dynamically create product cards
function createProductCard(product) {
	return `
    <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="rounded sweets-card">
			<div class="">
				<img src="${product.photo}"
					class="img-fluid w-100 rounded-top" alt=${product.name} />
			</div>

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
	if(product.photo !=''){	const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
	ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
}
	});
}

// Render initial set of product cards
renderProducts(restaurantProducts, "restaurantItemsProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderProducts(restaurantProducts, "restaurantItemsProductsRow");
});
