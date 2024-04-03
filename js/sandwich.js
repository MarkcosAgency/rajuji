// Sample data for products
// for  sandwiches
const sandwichProducts = [
	{
		name: "VEG GRILL CHEESE SANDWICH",
		photo: "./img/Rajuji Products/10.png",
		description: "Description of Product 1",
	},
	{
		name: "VEG CHEESE SANDWICH",
		photo: "./img/Rajuji Products/10.png",
		description: "Description of Product 1",
	},
	{
		name: "COLE SLOW SANDWICH",
		photo: "./img/Rajuji Products/11.png",
		description: "Description of Product 2",
	},
	{
		name: "VEG CHEESE BURGER",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "VEG PIZZA",
		photo: "./img/Rajuji Products/13.png",
		description: "Description of Product 4",
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
              Description of  ${product.name}
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
renderProducts(sandwichProducts, "sandwichesProductShow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderProducts(sandwichProducts, "sandwichesProductShow");
});