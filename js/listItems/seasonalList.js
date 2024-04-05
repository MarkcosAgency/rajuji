const seasonalProductsList = [
  {
    name: "DESHI GHEWAR",
    photo: "./img/Rajuji Products/10.png",
    description: "Description of Product 1",
  },
  {
    name: "DALDA GHEWAR",
    photo: "",
    description:
      "A traditional Indian sweet made with Dalda (hydrogenated vegetable oil), known for its honeycomb-like texture and enjoyed during festivals.",
  },
  {
    name: "MILK GHEWAR BIG",
    photo: "./img/Rajuji Products/11.png",
    description: "Description of Product 2",
  },
  {
    name: "MILK GHEWAR SMALL",
    photo: "",
    description: "Made of pure milk, no additive no colour...its pure",
  },

  {
    name: "MILK GHEWAR MINI",
    photo: "",
    description: "Made of pure milk, no additive no colour...its pure",
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
    description:
      " A traditional Indian sweet made from sesame seeds or peanuts and jaggery, pressed into thin sheets, offering a crunchy and nutty treat enjoyed especially during winter months.",
  },
  {
    name: "TIL",
    photo: "",
    description:
      "Sesame seeds, commonly used in Indian cuisine to add nutty flavor and texture to various dishes, sweets, and snacks.",
  },
  {
    name: "MOONGFALI",
    photo: "",
    description:
      "The Hindi term for peanuts, a versatile legume widely used in Indian cuisine for its nutty flavor and crunchy texture, consumed as a snack, used in cooking, or ground into paste for sauces and chutneys.",
  },
  {
    name: "STRAWBERRY",
    photo: "",
    description:
      "A vibrant red fruit with a sweet and slightly tart flavor, commonly enjoyed fresh, in desserts, smoothies, salads, and various culinary dishes.",
  },
  {
    name: "LITCHI",
    photo: "",
    description:
      "A tropical fruit with a sweet and fragrant flavor, featuring juicy translucent flesh encased in a rough, reddish-brown peel, commonly eaten fresh or used in desserts, beverages, and salads.",
  },
  {
    name: "MANGO",
    photo: "",
    description:
      "A tropical fruit known for its sweet and juicy flesh, vibrant color, and distinctive aroma, enjoyed fresh, in smoothies, desserts, salads, and as a key ingredient in various dishes and sauces.    ",
  },
  {
    name: "SITAPHAL",
    photo: "",
    description:
      " Sitaphal, also known as custard apple or sugar apple, is a tropical fruit with a creamy and sweet flesh dotted with black seeds. It is typically enjoyed fresh or used in desserts, milkshakes, ice creams, and other sweet dishes for its unique flavor and texture.",
  },
  {
    name: "ORANGE",
    photo: "",
    description:
      "A citrus fruit with a bright orange-colored outer peel and juicy, pulpy segments inside, known for its sweet and tangy flavor, often eaten fresh or used in juices, salads, desserts, and various culinary preparations.",
  },
  {
    name: "GRAPES",
    photo: "",
    description:
      "Small, juicy fruits growing in clusters on vines, available in various colors including green, red, and purple, enjoyed fresh as a snack, used in salads, desserts, and beverages, and also processed into products like raisins, wine, and grape juice.",
  },
  {
    name: "BLUEBERRY",
    photo: "",
    description:
      " Small, round berries with a deep blue-purple color, known for their sweet and tangy flavor, packed with antioxidants and essential nutrients, enjoyed fresh as a snack, in desserts, smoothies, salads, and baked goods.",
  },
  {
    name: "PISTA",
    photo: "",
    description:
      "Also known as pistachio, it's a type of nut with a greenish outer shell and a rich, buttery flavor, commonly used in both sweet and savory dishes, including desserts, ice creams, baklavas, and as a topping for salads or rice dishes.",
  },
];

function createListCard(product) {
  return `
	  <div class="col-md-6 col-lg-4 col-xl-3 my-2">
	  <div class="card w-auto  bg-transparent text-dark h-100" style="">
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
