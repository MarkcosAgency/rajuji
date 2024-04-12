
const seasonalProducts = [
  {
    name: "DESHI GHEWAR",
    photo: "Ghewar 1.png",
    description:
      "A traditional Indian sweet delicacy originating from Rajasthan, characterized by its intricate and porous disc-shaped structure made from wheat flour and soaked in sugar syrup, often garnished with nuts and edible silver foil.",
  },
  {
    name: "DALDA GHEWAR",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "MILK GHEWAR BIG",
    photo: "Ghewar 2.png",
    description: "Made of pure milk, no additive no colour...its pure",
  },
  {
    name: "MILK GHEWAR SMALL",
    photo: "",
    description: "Made of pure milk, no additive no colour...its pure",
  },

  {
    name: "MILK GHEWAR MINI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "DESHI FENI",
    photo: "",
    description:
      " Feni is made from cashew apples or coconut sap and has a distinct flavor profile. ",
  },
  {
    name: "LACHHA FENI",
    photo: "",
    description:
      "A thin, sweet & vermicelli like noodles made of rice flour, sugar & spices",
  },
  {
    name: "MILK FENI",
    photo: "",
    description:
      "Unlike traditional Feni, which is distilled from cashew apples or coconut sap, Milk Feni is made by distilling cashew feni with milk. This process gives it a smoother and creamier texture compared to regular Feni.",
  },
  {
    name: "GAJAK",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "TIL",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "MOONGFALI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "STRAWBERRY",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "LITCHI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "MANGO",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "SITAPHAL",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "ORANGE",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "GRAPES",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "BLUEBERRY",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "PISTA",
    photo: "",
    description: "Description of Product 3",
  },
];
function createProductCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
	<img src='./img/updatedimages/${product.photo}' class="card-img-top" alt="..." style="object-fit:contain">
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
  ProductsRow.innerHTML = "";

  // Render product cards
  products.forEach((product) => {
    if (product.photo !== "") {
      const cardHTML = createProductCard(product);
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}

renderProducts(seasonalProducts, "seasonalProductsRow");

window.addEventListener("resize", function () {
  renderProducts(seasonalProducts, "seasonalProductsRow");
});
