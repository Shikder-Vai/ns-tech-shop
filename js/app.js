const searchResults = document.getElementById("search-results");
const itemDetails = document.getElementById("item-details");
const loadItems = () => {
  const itemText = document.getElementById("search-input");
  const itemTextValue = itemText.value;
  itemText.value = "";
  const errorText = document.getElementById("error-text");
  //  Empty Error Handle
  if (itemTextValue == "") {
    errorText.innerText = "Please Write Something !";
    searchResults.innerText = "";
    itemDetails.textContent = "";
  } else {
    itemDetails.textContent = "";
    errorText.innerText = "";
    // Load API
    const url = `https://openapi.programming-hero.com/api/phones?search=${itemTextValue}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayItems(data.data));
  }
};
const displayItems = (items) => {
  //  Not found Error Handle
  const errorText = document.getElementById("error-text");
  if (items.length == 0) {
    errorText.innerText = "No Result Found !";
    searchResults.innerText = "";
    itemDetails.textContent = "";
  } else {
    errorText.innerText = "";
    const twentyItems = items.slice(0, 20);
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
  }
};

const loadItemsDetails = (itemId) => {
  const url = ` https://openapi.programming-hero.com/api/phone/${itemId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayItemsDetails(data.data));
};

const displayItemsDetails = (item) => {
  console.log(item);
  itemDetails.textContent = "";
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
      <div class="row p-3">
      <div class="col-md-4">
          <img src="${item.image}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
          <div class="card-body">
          <h1 class="card-title text-info">Information</h1>
          <h6><span class="fw-bold">Name:</span> ${item.name}</h6>
          <h6><span class="fw-bold">Model:</span> ${item.slug}</h6>
          <h6><span class="fw-bold">Released:</span> ${
            item.releaseDate ? item.releaseDate : `Releas Date Not Found`
          }</h6>
          <p> </p>
          <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button
        class="accordion-button collapsed fw-bold border border-info rounded-top"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseOne"
        aria-expanded="false"
        aria-controls="flush-collapseOne"
      >
        <!-- according 1 -->
        Main Features
      </button>
    </h2>
    <div
      id="flush-collapseOne"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <h6>
          <span class="fw-bold">Chipset:</span> ${item.mainFeatures.chipSet}
        </h6>
        <h6>
          <span class="fw-bold">Display Size:</span>
          ${item.mainFeatures.displaySize}
        </h6>
        <h6>
          <span class="fw-bold">Memory:</span> ${item.mainFeatures.memory}
        </h6>
        <h6>
          <span class="fw-bold">Sensors:</span> ${item.mainFeatures.sensors}
        </h6>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button
        class="accordion-button collapsed fw-bold border border-info rounded-top"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#flush-collapseTwo"
        aria-expanded="false"
        aria-controls="flush-collapseTwo"
      >
        <!-- according 2 -->
        Others
      </button>
    </h2>
    <div
      id="flush-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="flush-headingTwo"
      data-bs-parent="#accordionFlushExample"
    >
      <div class="accordion-body">
        <h6>
          <span class="fw-bold">Bluetooth:</span> ${
            item.others?.Bluetooth ? item.others.Bluetooth : `Not Found`
          }
        </h6>
        <h6><span class="fw-bold">GPS:</span> ${
          item.others?.GPS ? item.others.GPS : `Not Found`
        }</h6>
        <h6><span class="fw-bold">NFC:</span> ${
          item.others?.NFC ? item.others.NFC : `Not Found`
        }</h6>
        <h6><span class="fw-bold">Radio:</span> ${
          item.others?.Radio ? item.others.Radio : `Not Found`
        }</h6>
        <h6><span class="fw-bold">USB:</span> ${
          item.others?.USB ? item.others.USB : `Not Found`
        }</h6>
        <h6><span class="fw-bold">WLAN:</span> ${
          item?.others?.WLAN ? item.others.WLAN : `Not Found`
        }</h6>
      </div>
    </div>
    </div>
    </div>

          <a target="_blank" href="details video
          }" class="btn btn-primary shadow-none mt-3">Add to cart</a>
          <button onclick="lessDetails()" class="btn btn-danger mt-3">Cancle</button>

          </div>
      </div>
      </div>
      `;
  itemDetails.appendChild(div);
};

const lessDetails = () => {
  itemDetails.textContent = "";
};
