// Sample data for products
// for  sweets
const chenaFancySweetProducts = [
	{
		name: "GULAB PATTI SANDESH",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
		description: "Description of Product 1",
	},
	{
		name: "ICE CREAM SANDESH",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "KESAR SANDESH",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "CHAM CHAM MALAI",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "CHAM CHAM KESAR MALAI",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},{
		name: "CHAM CHAM FRUIT MALAI ",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},{
		name: "ABARKHABO",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},{
		name: "CHAM CHAM KESAR",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "COCONUT MALAI CUP",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "RABRI MALPUA",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "PARWAL",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	},
    {
		name: "RASMALAI",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	}, {
		name: "CHENA PAYESH",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
		description: "Description of Product 1",
	}, {
		name: "CHENA TOAST",
		photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
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
		const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
		ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
	});
}

// Render initial set of product cards
renderProducts(chenaFancySweetProducts, "chenaFancyProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
	renderProducts(chenaFancySweetProducts, "chenaFancyProductsRow");
});
