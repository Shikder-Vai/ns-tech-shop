const loadItems = (items) => {
  const itemText = document.getElementById("searchInput").value;
  const url = `https://openapi.programming-hero.com/api/phones?search=${itemText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayItems(data.data));
};
const displayItems = (item) => {
  const div = document.createElement("div");
  div.classList("col");
};
