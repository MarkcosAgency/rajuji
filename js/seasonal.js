// Sample data for namkeen products
const seasonalProducts = [
	{
		name: "BHUJIA 1KG",
		photo: "./img/Rajuji Products/10.png",
		description: "Description of Product 1",
	},
	{
		name: "BHUJIA 300 GM",
		photo: "./img/Rajuji Products/10.png",
		description: "Description of Product 1",
	},
	{
		name: "BHUJIA 400 GM ALL",
		photo: "./img/Rajuji Products/11.png",
		description: "Description of Product 2",
	},
	{
		name: "IN ONE 1KG",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	
	{
		name: "ALL IN ONE 200 GM ALU",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "IN ONE 400 GM ALU",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "BHUJIA 200 GM ALU",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "BHUJIA 400 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "CORNFLAKES MIXTURE 250 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "CORNFLAKES MIXTURE 500 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "JAWA NAMKIN 300 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "JHAL CHANACHUR 200 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "JHAL CHANACHUR 400 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "JHAL CHANACHUR 1KG",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "KHAST MIX 1KG",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "KHAST MIX 200GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "KHAST MIX 400GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "TOK JHAL MISTI 1KG",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},
	{
		name: "TOK JHAL MISTI 200GM TOK",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},{
		name: "JHAL MISTI 400GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},{
		name: "MOONG DAL 200 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},{
		name: "MOONG DAL 500 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},{
		name: "METHAI SWALI 300 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},{
		name: "SWALI 300 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},{
		name: "MINI KACHORI 300 GM",
		photo: "./img/Rajuji Products/12.png",
		description: "Description of Product 3",
	},{
		name: "MINI SINGHARA 300 GM",
		photo: "./img/Rajuji Products/12.png",
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
	ProductsRow.innerHTML = ""; 

	// Render product cards
	products.forEach((product) => {
		const cardHTML = createProductCard(product); 
		ProductsRow.insertAdjacentHTML("beforeend", cardHTML); 
	});
}

renderProducts(seasonalProducts, "seasonalProductsRow");

window.addEventListener("resize", function () {
	renderProducts(seasonalProducts, "seasonalProductsRow");
});