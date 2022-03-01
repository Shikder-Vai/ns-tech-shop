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
    <button onclick="loadItemsDetails('${item.slug}')"
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

const loadItemsDetails = (itemId) => {
  const url = ` https://openapi.programming-hero.com/api/phone/${itemId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayItemsDetails(data.data));
};

const displayItemsDetails = (item) => {
  console.log(item);
  const itemDetails = document.getElementById("item-details");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <div class="row p-3">
    <div class="col-md-4">
        <img src="${item.image}" class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
        <div class="card-body">
        <h1 class="card-title">Information</h1>
        <h6><span class="fw-bold">Name:</span> ${item.name}</h6>
        <h6><span class="fw-bold">Model:</span> ${item.slug}</h6>
        <h6><span class="fw-bold">Released:</span> ${item.releaseDate}</h6>
        <p> </p>
        <a target="_blank" href="details video
        }" class="btn btn-primary shadow-none">Go somewhere</a>
        </div>
    </div>
    </div>
    `;
  itemDetails.appendChild(div);
};
