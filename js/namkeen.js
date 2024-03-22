// Sample data for namkeen products
const namkeenProducts = [
	{
		name: "BHUJIA 1KG",
		photo: "./img/namkeen/2-2-500x500.jpg",
		description: "Description of Product 1",
	},
	{
		name: "BHUJIA 300 GM",
		photo: "./img/namkeen/3-1.jpg",
		description: "Description of Product 1",
	},
	{
		name: "BHUJIA 400 GM ALL",
		photo: "./img/namkeen/IMG_0353.jpg",
		description: "Description of Product 2",
	},
	{
		name: "IN ONE 1KG",
		photo: "./img/namkeen/IMG_0360.jpg",
		description: "Description of Product 3",
	},
	
	{
		name: "ALL IN ONE 200 GM ALU",
		photo: "./img/namkeen/IMG_0365.jpg",
		description: "Description of Product 3",
	},
	{
		name: "IN ONE 400 GM ALU",
		photo: "./img/namkeen/IMG_0367.jpg",
		description: "Description of Product 3",
	},
	{
		name: "BHUJIA 200 GM ALU",
		photo: "./img/namkeen/IMG_0372.jpg",
		description: "Description of Product 3",
	},
	{
		name: "BHUJIA 400 GM",
		photo: "./img/namkeen/IMG_0397.jpg",
		description: "img/namkeen/IMG_0398.jpg",
	},
	{
		name: "CORNFLAKES MIXTURE 250 GM",
		photo: "./img/namkeen/IMG_0398.jpg",
		description: "Description of Product 3",
	},
	{
		name: "CORNFLAKES MIXTURE 500 GM",
		photo: "./img/namkeen/IMG_0399.jpg",
		description: "Description of Product 3",
	},
	{
		name: "JAWA NAMKIN 300 GM",
		photo: "./img/namkeen/IMG_0400.jpg",
		description: "Description of Product 3",
	},
	{
		name: "JHAL CHANACHUR 200 GM",
		photo: "./img/namkeen/IMG_0401.jpg",
		description: "Description of Product 3",
	},
	{
		name: "JHAL CHANACHUR 400 GM",
		photo: "./img/namkeen/IMG_0402.jpg",
		description: "Description of Product 3",
	},
	{
		name: "JHAL CHANACHUR 1KG",
		photo: "./img/namkeen/IMG_0403.jpg",
		description: "Description of Product 3",
	},
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
					${product.description}
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
		const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
		ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
	});
}

// Render initial set of product cards
renderProducts(namkeenProducts, "namkeensProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderProducts(namkeenProducts, "namkeensProductsRow");
});
