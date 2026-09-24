const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector("#productContainer");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${productId}`;

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => renderProduct(data));

  function renderProduct(data) {
  productContainer.innerHTML = `
    <article class="product-detail">

      <img 
        src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" 
        alt="${data.productdisplayname}"
      >

      <section class="product-info">
        <h1>${data.productdisplayname}</h1>

        <p>Brand: ${data.brandname}</p>

        <p>Kategori: ${data.category}</p>

        <p>Type: ${data.articletype}</p>

        <p>Pris: ${data.price} kr.</p>

        <button>Køb nu</button>
      </section>

    </article>
  `;
}