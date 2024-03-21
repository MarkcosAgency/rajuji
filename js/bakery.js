// Sample data for bakery products
const bakeryProducts = [
    {
        name: "Bread 1KG",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Bread 1KG",
    },
    {
        name: "Cake 500 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cake 500 GM",
    },
    {
        name: "Cookies 400 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cookies 400 GM",
    },
    {
        name: "Bread 1KG",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Bread 1KG",
    },
    {
        name: "Cake 500 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cake 500 GM",
    },
    {
        name: "Cookies 400 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cookies 400 GM",
    }, {
        name: "Bread 1KG",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Bread 1KG",
    },
    {
        name: "Cake 500 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cake 500 GM",
    },
    {
        name: "Cookies 400 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cookies 400 GM",
    }, {
        name: "Bread 1KG",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Bread 1KG",
    },
    {
        name: "Cake 500 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cake 500 GM",
    },
    {
        name: "Cookies 400 GM",
        photo: "./img/logo/Logo_BhikhaaramChandmal_Rajuji.png",
        description: "Description of Cookies 400 GM",
    },
    // Add more bakery products as needed
];

// Function to dynamically create product cards
function createProductCard(product) {
    return `
    <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="rounded bakery-card">
            <div>
                <img src="${product.photo}" class="img-fluid w-100 rounded-top" alt="${product.name}" />
            </div>
            <div class="p-4 border text-dark .text-montserrat text-start border-top-0">
                <h4>${product.name}</h4>
                <p class="text-cocon m-0">${product.description}</p>
            </div>
        </div>
    </div>
    `;
}

// Function to render product cards
function renderProducts(products, productRowId) {
    const productsRow = document.getElementById(productRowId);
    productsRow.innerHTML = ""; // Clear previous content

    // Render product cards
    products.forEach((product) => {
        const cardHTML = createProductCard(product);
        productsRow.insertAdjacentHTML("beforeend", cardHTML);
    });
}

// Render initial set of product cards
renderProducts(bakeryProducts, "bakeryProductsRow");

// Re-render product cards on window resize event to adjust the number of cards displayed based on screen size
window.addEventListener("resize", function () {
    renderProducts(bakeryProducts, "bakeryProductsRow");
});
