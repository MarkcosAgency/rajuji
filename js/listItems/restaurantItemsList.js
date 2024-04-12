const restaurantProductsList = [
  {
    name: "RADHABALLVI",
    photo: "",
    description:
      "A  delicacy consisting of deep-fried lentil-stuffed flatbreads, showcasing a rich and savory flavor profile typical of Bengali cuisine.",
  },

  {
    name: "SABJI KHASTA  KACHORI",
    photo: "",
    description:
      " Crispy fried pastry filled with spiced vegetable mixture, a flavorful Indian snack.",
  },
  {
    name: "IDLY SAMBAR CHATNI",
    photo: "",
    description:
      "A South Indian breakfast staple featuring soft steamed rice cakes (idlis) served with tangy and flavorful lentil-based stew (sambar) and a variety of chutneys, offering a harmonious blend of textures and tastes.",
  },

  {
    name: "PLAIN DOSA",
    photo: "",
    description:
      "A thin, crispy, and golden-brown fermented rice and lentil crepe, often served with coconut chutney and sambar, showcasing a delightful balance of flavors and textures.",
  },
  {
    name: "MASALA DOSA",
    photo: "",
    description:
      "A thin, crispy rice and lentil crepe filled with a spiced potato filling, typically served with coconut chutney and sambar, offering a delightful fusion of textures and flavors.",
  },
  {
    name: "CHOWMEIN",
    photo: "",
    description:
      "A popular Chinese stir-fried noodle dish, typically made with egg noodles, vegetables, and sometimes meat or tofu, seasoned with soy sauce and other flavorful ingredients, offering a savory and satisfying meal option.",
  },
  {
    name: "NAAN",
    photo: "",
    description:
      " A traditional Indian flatbread, typically made from leavened dough and cooked in a tandoor oven",
  },
  {
    name: "MASALA KULCHA",
    photo: "",
    description:
      " Spiced potato-stuffed North Indian bread, bursting with flavor and baked to perfection.",
  },
  {
    name: "FALKA",
    photo: "",
    description:
      "A type of sweet, crisp fried bread or pastry found in some Indian cuisines, particularly in Bengali cuisine.",
  },
  {
    name: "PULAO",
    photo: "",
    description:
      " A fragrant and flavorful rice dish cooked with aromatic spices, vegetables, and sometimes meat or seafood, offering a delightful one-pot meal with a balance of textures and tastes.",
  },
  {
    name: "MIX VEG PANEER",
    photo: "",
    description:
      " A savory Indian dish featuring a medley of mixed vegetables and paneer (Indian cottage cheese), cooked together in a flavorful gravy, offering a delicious combination of textures and flavors. ",
  },
  {
    name: "DAL MAKHANI",
    photo: "",
    description:
      " A rich and creamy Punjabi lentil dish made with black lentils (urad dal), kidney beans (rajma), butter, cream, and aromatic spices, offering a luscious and indulgent culinary experience.",
  },
  {
    name: "DAL FRY",
    photo: "",
    description:
      " A flavorful Indian lentil dish made by tempering cooked lentils (usually yellow lentils such as Toor dal or Moong dal) with spices, onions, tomatoes, and garlic, offering a comforting and nutritious meal option.",
  },
  {
    name: "RAITA",
    photo: "",
    description:
      "A refreshing yogurt-based side dish seasoned with spices and often mixed with chopped vegetables or fruits, providing a cool and tangy complement to spicy Indian dishes.",
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
   overflow: hidden;">${product.description}</p></div>
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
renderProducts(restaurantProductsList, "restaurantListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(restaurantProductsList, "restaurantListsRow");
});
