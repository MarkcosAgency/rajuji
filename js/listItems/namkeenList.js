// Sample data for namkeen products
// Sample data for namkeen products
const namkeenProductsList = [
  {
    name: "BHUJIA",
    photo: "./img/namkeen/2-2-500x500.jpg",
    description:
      "The flavorful & satisfying taste makes it an irresistible choice for a spicy treat",
  },
  {
    name: "JHAL CHANACHUR",
    photo: "./img/namkeen/3-1.jpg",
    description: "A zesty & spicy snack for all spicy lovers.",
  },
  {
    name: "KHATTA MITHA",
    photo: "./img/namkeen/IMG_0353.jpg",
    description: "A crispy snack prepared using sweet and sour.",
  },
  {
    name: "KHASTA CHANACHUR",
    photo: "",
    description:
      "A crispy and crunchy Bengali snack made from fried lentil or gram flour noodles, mixed with spices, nuts, dried fruits, and sometimes puffed rice, offering a flavorful and addictive munching experience.",
  },

  {
    name: "MOONG DAL",
    photo: "./img/namkeen/IMG_0365.jpg",
    description: "Fried dal for people who loves sober test.",
  },
  {
    name: "CORNFLAKS MIXTURE",
    photo: "./img/namkeen/IMG_0367.jpg",
    description:
      "A crunch of cornflakes with dry fruits making it a unique blend of crunch & health.",
  },
  {
    name: "PANCHRATAN",
    photo: "",
    description:
      "It is made of mixed flavor of sour and sweet potato sticks and dry fruits. You wouldn't want to stop eating it.",
  },
  {
    name: "KAJU DALMOTH",
    photo: "",
    description:
      "A savory Indian snack made from roasted cashews (kaju), lentil drops (dalmooth), and a blend of spices, offering a crunchy and flavorful treat often enjoyed with tea or as a crunchy topping for chaats and salads.",
  },
  {
    name: "BADAM DALMOTH",
    photo: "",
    description:
      "A crunchy and savory Indian snack made from roasted almonds (badam), lentil drops (dalmooth), and a blend of spices, offering a delightful combination of nuttiness and spice, commonly enjoyed as a tea-time snack or as a topping for chaats and salads.",
  },
  {
    name: "SADA CHIPS",
    photo: "./img/namkeen/IMG_0399.jpg",
    description:
      "A pure flavor of thinly sliced potatoes, lightly seasoned & perfectly crisp.",
  },
  {
    name: "CHILI POTATO CHIPS",
    photo: "",
    description:
      "Chili potato chips are a tasty snack featuring thin slices of potatoes that have been seasoned with a spicy chili flavor.",
  },
  {
    name: "KABLI MIX",
    photo: "./img/namkeen/IMG_0401.jpg",
    description: "Description of Product 3",
  },
  {
    name: "DRYFRUIT DALMOTH",
    photo: "",
    description:
      " A savory Indian snack made from a mixture of fried lentil or gram flour noodles, combined with various dry fruits such as raisins, cashews, almonds, and pistachios, along with a blend of spices, offering a crunchy texture and a sweet-savory flavor profile, commonly enjoyed as a tea-time snack or during festivities.",
  },
  {
    name: "SAHI DALMOTH",
    photo: "",
    description:
      "Is a popular north indian snack that originated in the state of uttar pradesh. It is a savory and crunchy mixture, often enjoyed as a tea-time snack.",
  },
  {
    name: "AMIR CHANACHUR",
    photo: "",
    description:
      " A popular brand of spicy snack mix originating from Bangladesh, typically made from a combination of fried lentil or gram flour noodles, nuts, dried fruits, and a variety of spices, offering a crunchy and flavorful munching experience.",
  },
  {
    name: "TOK JHAL MISTI",
    photo: "",
    description:
      "Tok jhal misti chanachur is a popular bengali snack. This mixture combines spiciness, tanginess, and sweetness.",
  },
  {
    name: "ALL IN ONE",
    photo: "./img/namkeen/IMG_0403.jpg",
    description:
      "A delicious & crunchy snack of all type of indian namkeens mixed together to give it a uniqueness",
  },
  {
    name: "MARWARI BHUJIA",
    photo: "",
    description:
      "Is a flavorful indian snack hailing from the state of rajasthan . It's chana bhujiya.",
  },
  {
    name: "PAPDI BESAN",
    photo: "",
    description:
      "Crisp and flavorful savory snack perfect for munching on anytime.",
  },
  {
    name: "BHAVNAGRI",
    photo: "",
    description:
      "Experience the irresistible crunch and fiery flavor explosion of our Bhavnagari Bhujia, expertly crafted from Besan, spices, and love, meticulously fried to golden perfection for a spicy delight that dances on your palate.",
  },
  {
    name: "GANTHIA",
    photo: "",
    description:
      "Crispy and savory, this traditional Indian snack bursts with flavors and offers a delightful crunch.",
  },
  {
    name: "MASALA MURI",
    photo: "",
    description:
      "Embark on a flavor adventure with masala muri, where puffed rice is expertly tossed with a tantalizing blend of spices, herbs, and crunchy toppings, creating an irresistible snack that promises a burst of savory delight in every bite.",
  },
  {
    name: "KHOKA BHUJIA",
    photo: "",
    description:
      "A savory and crunchy Indian snack that will leave your taste buds satisfied.",
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
renderProducts(namkeenProductsList, "namkeensListsRow");

// You may also want to re-render the product cards on window resize event to adjust the number of cards displayed based on screen size.
window.addEventListener("resize", function () {
  renderProducts(namkeenProductsList, "namkeensListsRow");
});
