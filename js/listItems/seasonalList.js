const seasonalProductsList = [
  {
    name: "DESHI GHEWAR",
    photo: "./img/Rajuji Products/10.png",
    description: "Description of Product 1",
  },
  {
    name: "DALDA GHEWAR",
    photo: "",
    description: "Description of Product 1",
  },
  {
    name: "MILK GHEWAR BIG",
    photo: "./img/Rajuji Products/11.png",
    description: "Description of Product 2",
  },
  {
    name: "MILK GHEWAR SMALL",
    photo: "",
    description: "Description of Product 3",
  },

  {
    name: "MILK GHEWAR MINI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "DESHI FENI",
    photo: "./img/Rajuji Products/12.png",
    description: "Description of Product 3",
  },
  {
    name: "LACHHA FENI",
    photo: "./img/Rajuji Products/12.png",
    description: "Description of Product 3",
  },
  {
    name: "MILK FENI",
    photo: "./img/Rajuji Products/12.png",
    description: "Description of Product 3",
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

function createListCard(product) {
  return `
      <div class="col-md-3 my-1">
      <div class="card bg-transparent" >
      <div class="card-body">
        <h5 class="card-title text-dark">${product.name}</h5>
      </div>
    </div>
    </div> `;
}

function renderProducts(products, productRowId) {
  const ProductsRow = document.getElementById(productRowId);
  ProductsRow.innerHTML = "";

  // Render product cards
  products.forEach((product) => {
    if (product.photo == "") {
      const cardHTML = createListCard(product);
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}

renderProducts(seasonalProductsList, "restaurantListRow");

window.addEventListener("resize", function () {
  renderProducts(seasonalProductsList, "restaurantListRow");
});
