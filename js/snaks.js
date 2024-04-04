// Sample data for products
// for  sweets
const sweetProducts = [
  {
    name: "SINGHARA BIKANERI",
    photo: "./img/Rajuji Products/10.png",
    description: "Description of Product 1",
  },
  {
    name: "KHASTA KACHORI",
    photo: "./img/Rajuji Products/10.png",
    description: "Golden fried delights filled with savory spiced lentils.",
  },
  {
    name: "CUTLET",
    photo: "",
    description:
      "A mix of various steamed vegetables like bit, beans, peas and carrot mixed in potato.",
  },
  {
    name: "DHOKLA",
    photo: "./img/Rajuji Products/12.png",
    description:
      "A harmonious blend of fermented goodness, offering a taste of authentic indian flavors in every delightful bite. Served with tamarind & green chatni.",
  },
  {
    name: "VEG PATTIES",
    photo: "",
    description:
      "Appetizing vegetable patties are a delicious treat. They are loaded with potatoes, carrots, corn, green beans, and peas, and cooked",
  },
  {
    name: "KHANDVI",
    photo: "",
    description: "A rolled-up marvel of gram flour perfection. Silky smooth, adorned with mustard seeds, green chillies and coconut, it's a gujarati specialty with its delicate texture & zesty flavor.",
  },
];

// Function to dynamically create product cards
function createProductCard(product) {
  return `
    <div class="col-md-6 col-lg-4 col-xl-3">
    <div class="card w-auto  bg-transparent text-dark h-100" style="">
  <img src='${product.photo}' class="card-img-top" alt="..." style="object-fit:contain">
  <div class="card-body text-start">
    <h5 class="card-title ">${product.name}</h5>
    <p class="card-text">${product.description}</p>
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
renderProducts(sweetProducts, "snacksProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
// window.addEventListener("resize", function () {
//   renderProducts(sweetProducts, "snacksProductsRow");
// });
