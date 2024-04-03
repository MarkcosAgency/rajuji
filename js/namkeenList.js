// Sample data for namkeen products
const namkeenProductsList = [
  {
    name: "BHUJIA",
    photo: "./img/namkeen/2-2-500x500.jpg",
    description: "Description of Product 1",
  },
  {
    name: "JHAL CHANACHUR",
    photo: "./img/namkeen/3-1.jpg",
    description: "Description of Product 1",
  },
  {
    name: "KHATTA MITHA",
    photo: "./img/namkeen/IMG_0353.jpg",
    description: "Description of Product 2",
  },
  {
    name: "KHASTA CHANACHUR",
    photo: "",
    description: "Description of Product 3",
  },

  {
    name: "MOONG DAL",
    photo: "./img/namkeen/IMG_0365.jpg",
    description: "Description of Product 3",
  },
  {
    name: "CORNFLAKS MIXTURE",
    photo: "./img/namkeen/IMG_0367.jpg",
    description: "Description of Product 3",
  },
  {
    name: "PANCHRATAN",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "KAJU DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "BADAM DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "SADA CHIPS",
    photo: "./img/namkeen/IMG_0399.jpg",
    description: "Description of Product 3",
  },
  {
    name: "CHILI POTATO CHIPS",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "KABLI MIX",
    photo: "./img/namkeen/IMG_0401.jpg",
    description: "Description of Product 3",
  },
  {
    name: "DRYFRUIT DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "SAHI DALMOTH",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "AMIR CHANACHUR",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "TOK JHAL MISTI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "ALL IN ONE",
    photo: "./img/namkeen/IMG_0403.jpg",
    description: "Description of Product 3",
  },
  {
    name: "MARWARI BHUJIA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "PAPDI BESAN",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "BHAVNAGRI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "GANTHIA",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "MASALA MURI",
    photo: "",
    description: "Description of Product 3",
  },
  {
    name: "KHOKA BHUJIA",
    photo: "",
    description: "Description of Product 3",
  },
];

function createListCard(product) {
  return `
  <li class="">${product.name}</li>
            `;
}

// Function to render product cards
function renderProducts(products, productRowId) {
  const ProductsRow = document.getElementById(productRowId);
  const ListRow = document.getElementById("namkeensListsRow");
  ProductsRow.innerHTML = ""; // Clear previous content
  ListRow.innerHTML = "";
  const lists = document.createElement("ul");
  let str;

  // Render product cards
  products.forEach((product) => {
    if (product.photo == "") {
      const cardHTML = createListCard(product); // Call the createProductCard function and pass the product object as an argument
      ProductsRow.insertAdjacentHTML("beforeend", cardHTML);
    }
  });
}

// Render initial set of product cards
renderProducts(namkeenProductsList, "namkeensListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(namkeenProductsList, "namkeensListsRow");
});
