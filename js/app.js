const loadItems = () => {
  const itemText = document.getElementById("searchInput").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${itemText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayItems(data.data));
};
const displayItems = (items) => {
  const twentyItems = items.slice(0, 20);
  const searchResults = document.getElementById("search-results");
  searchResults.textContent = "";
  twentyItems.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card text-center h-100 p-3">
    <img src="${item.image}" class="card-img-top w-50 mx-auto h-75" alt="...">
    <div class="card-body">
      <h4 class="card-title text-info">${item.phone_name}</h4>
      <h5 class="card-text"><span class="text-primary fw-bold">Brand:</span> ${item.brand}</h5>
      <h5 class="card-text"><span class="text-primary fw-bold">Model:</span> ${item.slug}</h5>
    </div>
    <div class="">
    <button
    class="btn w-100 btn-outline-secondary"
    type="button"
    id="button-addon2"
  >
    About More
  </button>
    </div>
  </div>`;
    searchResults.appendChild(div);
  });
};

const itemsDetails = (itemId) => {
  const url = ` https://openapi.programming-hero.com/api/phone/${itemId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.data));
};
itemsDetails();
