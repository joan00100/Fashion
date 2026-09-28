const productList = document.querySelector(".product-list");

const category = new URLSearchParams(window.location.search).get("category");

let endpoint = "https://kea-alt-del.dk/t7/api/products";

if (category) {
  endpoint = `https://kea-alt-del.dk/t7/api/products?category=${encodeURIComponent(category)}`;
}

const categoryTitle = document.querySelector("#categoryTitle");

if (category && categoryTitle) {
  categoryTitle.textContent = category;
}

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => showProducts(data));

function showProducts(products) {
  products.forEach((product) => {
    productList.innerHTML += `
      <article class="product-card">

        <a href="productdetails.html?id=${product.id}" class="product-image-link">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt="${product.productdisplayname}"
          >

          <div class="product-labels">
            ${product.discount ? '<span class="sale-label">Tilbud</span>' : ""}
            ${product.soldout ? '<span class="soldout-label">Udsolgt</span>' : ""}
          </div>
        </a>

        <div class="product-info">
          <p class="category">${product.category}</p>

          <h2>
            <a href="productdetails.html?id=${product.id}">
              ${product.productdisplayname}
            </a>
          </h2>

          <p class="price">${product.price} kr.</p>
        </div>

      </article>
    `;
  });
}