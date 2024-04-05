// Sample data for products
// for  sweets
const gheeSweetProducts = [
  {
    name: "SOAN PAPDI ELAICHI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju masthead .png",
    description:
      "Is a popular indian sweet that is known for its flaky and melt-in-the-mouth texture and made with deshi ghee. It likely emphasizes the traditional or authentic version of this sweet.",
  },
  {
    name: "SOAN PAPDI DESHI",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "LADDU KESARIA",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description: "Kesaria laddoo made out of love.",
  },
  {
    name: "LADDU DESHI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description:
      " Also known as motichoor laddu, is a popular indian sweet. Made with pure desi ghee.",
  },
  {
    name: "LADDU KANPURI",
    photo: "./img/Rajuji_Al_Prdt_img/Kaju Parallax.png",
    description:
      "A delectable traditional sweet that will satisfy your sweet tootH",
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
    description: "A sumptuous & traditional indian sweet, originating from the vibrant state of gujarat made of desi ghee.",
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
    description: "A rich & aromatic flavor, with a crumbly and melt-in-your-mouth texture.",
  },
  {
    name: "DRYFRUIT LADDU",
    photo: "",
    description:
      "Dry fruit laddu is a healthy and energy-packed sweet treat. It is often enjoyed as a snack or dessert.",
  },
  {
    name: "GOND PAK",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "GOND LADDU",
    photo: "",
    description:
      "A perfect and healthy fusion of refined flour and Edible Gum (Gond). Indulge in the irresistible combination of textures, offering a delightful symphony of flavors in every bite.",
  },
];

// Function to dynamically create product cards

function createProductCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3 ">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
	<img src='${product.photo}' class="card-img-top" alt="..." style="object-fit:contain">
	<div class="card-body text-start">
	  <h5 class="card-title ">${product.name}</h5>
    <div style="width:"100%"> <p class="card-text" style="-webkit-line-clamp: 3; display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;  
    overflow: hidden;">${product.description}</p>
    </div>
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
    if (product.photo != "") {
      const cardHTML = createProductCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML); // Insert the card HTML into the productsRow element
    }
  });
}

// Render initial set of product cards
renderProducts(gheeSweetProducts, "gheeProductsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(gheeSweetProducts, "gheeProductsRow");
});
