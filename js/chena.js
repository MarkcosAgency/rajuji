// Sample data for products
// for  sweets
const chenaSweetProducts = [
	{
		name: "ROSOGOLLA",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
		description: "Description of Product 1",
	},
	{
		name: "RAJ BHOG",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "GULAB JAMUN SPL ",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "GULAB JAMUN MEDIUM",
		photo: "",
		description: "Description of Product 1",
	},
    {
		name: "GULAB JAMUN MINI",
		photo: "",
		description: "Description of Product 1",
	},{
		name: "CHAM CHAM RAW ",
		photo: "",
		description: "Description of Product 1",
	},{
		name: "MILK CAKE",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},{
		name: "NEW MILK CAKE",
		photo: "",
		description: "Description of Product 1",
	},
    {
		name: "KALAKAND",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "GHEE KALAKAND",
		photo: "",
		description: "Description of Product 1",
	},
    {
		name: "MATHURA PEDA",
		photo: "",
		description: "Description of Product 1",
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
              Description of ${product.name}
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
		if(product.photo != ''){
			const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
		ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
		}
	});
}

// Render initial set of product cards
renderProducts(chenaSweetProducts, "chenaProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderProducts(chenaSweetProducts, "chenaProductsRow");
});
