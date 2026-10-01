const products = [
  {
    id: 1,
    name: "Classic Shirt",
    price: 349,
    category: "Women",
    image: "img/t-shirtdame.jpg"
  },
  {
    id: 2,
    name: "Oversized Blazer",
    price: 999,
    category: "Women",
    image: "img/blazer.jpg"
  },
  {
    id: 3,
    name: "Classic T-shirt",
    price: 349,
    category: "Men",
    image: "img/t-shirtmand.jpg"
  },
  {
    id: 4,
    name: "Wide Leg Trousers",
    price: 749,
    category: "Women",
    image: "img/widetrousers.jpg"
  }
];

const productList = document.querySelector(".product-list");

// Vis produkterne
function showProducts(productsToShow) {
  productList.innerHTML = "";

  productsToShow.forEach((product) => {
    productList.innerHTML += `
      <article class="product-card">
        <a href="productdetails.html?id=${product.id}">
          <img src="${product.image}" alt="${product.name}">
        </a>

        <div class="product-info">
          <p class="category">${product.category}</p>

          <h2>
            <a href="productdetails.html?id=${product.id}">
              ${product.name}
            </a>
          </h2>

          <p class="price">${product.price} kr.</p>
        </div>
      </article>
    `;
  });
}

// Find sorteringsknapperne og tilføj klikfunktion
document.querySelectorAll("#sorting button").forEach((button) => {
  button.addEventListener("click", sortProducts);
});

// Sorter produkterne
function sortProducts(event) {
  const value = event.target.textContent;

  let sortedProducts = [...products];

  if (value === "Pris lav-høj") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (value === "Pris høj-lav") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (value === "A-Z") {
    sortedProducts.sort((a, b) =>
      a.name.localeCompare(b.name, "da")
    );
  } else if (value === "Z-A") {
    sortedProducts.sort((a, b) =>
      b.name.localeCompare(a.name, "da")
    );
  }

  showProducts(sortedProducts);
}

// Vis alle produkter fra starten
showProducts(products);