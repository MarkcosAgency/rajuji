const gheeSweetProductsList = [
  {
    name: "SOAN PAPDI ELAICHI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description:
      "Is a popular indian sweet that is known for its flaky and melt-in-the-mouth texture and made with deshi ghee. It likely emphasizes the traditional or authentic version of this sweet.",
  },
  {
    name: "SOAN PAPDI DESHI",
    photo: "",
    description: "Is a popular indian sweet that is known for its flaky and melt-in-the-mouth texture and made with deshi ghee. It likely emphasizes the traditional or authentic version of this sweet.",
  },
  {
    name: "LADDU KESARIA",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "LADDU DESHI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "LADDU KANPURI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "LADDU SPL",
    photo: "",
    description:
      "A delectable sweet treat perfect for satisfying your dessert cravings.",
  },
  {
    name: "MOTI PAK",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "DILKHUSAL",
    photo: "",
    description: " A classic vegetarian sweet perfect for any occasion.",
  },
  {
    name: "SATTU",
    photo: "",
    description:
      "This sweet is made by roasting sattu in pure ghee and adding sweetness to it.",
  },
  {
    name: "DESHI BUNDI",
    photo: "",
    description:
      " Desi bundi, also known as boondi, is a popular indian sweet. The combination of the crispy boondis and the sweet syrup makes desi bundi a delightful and popular treat.1",
  },
  {
    name: "BESAN LADDU",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Description of Product 1",
  },
  {
    name: "DRYFRUIT LADDU",
    photo: "",
    description: "Dry fruit laddu is a healthy and energy-packed sweet treat. It is often enjoyed as a snack or dessert.",
  },
  {
    name: "GOND PAK",
    photo: "",
    description: "A traditional indian dessert made from gond(edible gum), mawa and sugar.",
  },
  {
    name: "GOND LADDU",
    photo: "",
    description: "A perfect and healthy fusion of refined flour and Edible Gum (Gond). Indulge in the irresistible combination of textures, offering a delightful symphony of flavors in every bite.",
  },,
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

// Function to render product cards
function renderProducts(products, productRowId) {
  const ProductsRow = document.getElementById(productRowId);
  ProductsRow.innerHTML = ""; // Clear previous content

  // Render product cards
  products.forEach((product) => {
    if (product.photo == "") {
      const cardHTML = createListCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}

// Render initial set of product cards
renderProducts(gheeSweetProductsList, "gheesweetsListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(gheeSweetProductsList, "gheesweetsListsRow");
});
