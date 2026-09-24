const categoryList = document.querySelector(".category-list");

const endpoint = "https://kea-alt-del.dk/t7/api/categories";

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => showCategories(data));

function showCategories(categories) {
  categories.forEach((category) => {
    categoryList.innerHTML += `
      <a 
        href="productlist.html?category=${category.category}"
        class="category-card"
      >
        ${category.category}
      </a>
    `;
  });
}