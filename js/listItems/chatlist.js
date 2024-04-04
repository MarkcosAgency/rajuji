const chatProductsList = [
  {
    name: "RAJ KACHORI",
    photo: "./img/Rajuji Products/10.png",
    description: "King sized Kachori stuffed with sprouts, vegetables,crispy pakoris, yogurt, and topped with spices, chutneys, crispy bhujia.1",
  },
  {
    name: "PAPDI CHAT",
    photo: "",
    description: "Crispy papdis adorned with tangy chutneys, yogurt, and spices create a mouthwatering street food experience.",
  },
  {
    name: "DAHI VADA",
    photo: "./img/Rajuji Products/11.png",
    description: "Soft lentil flat dumplings soaked in creamy yogurt, garnished with aromatic spices.",
  },
];

function createListCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3 my-2">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
	<div class="card-body text-start">
	  <h5 class="card-title ">${product.name}</h5>
	  <p class="card-text">${product.description}</p>
	</div>
  </div>
  </div> 
  `;
}

function renderProducts(products, productRowId) {
  const ProductsRow = document.getElementById(productRowId);
  ProductsRow.innerHTML = ""; // Clear previous content

  // Render product cards
  products.forEach((product) => {
    if (product.photo == "") {
      const cardHTML = createListCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
    }
  });
}

// Render initial set of product cards
renderProducts(chatProductsList, "chatListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(chatProductsList, "chatListsRow");
});
