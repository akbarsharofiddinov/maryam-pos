const products = [
  {
    id: 1,
    name: "Product-1",
    price: 800000,
  },
  {
    id: 2,
    name: "Product-2",
    price: 800000,
  },
  {
    id: 3,
    name: "Product-3",
    price: 800000,
  },
  {
    id: 4,
    name: "Product-4",
    price: 800000,
  },
  {
    id: 5,
    name: "Product-5",
    price: 800000,
  },
  {
    id: 6,
    name: "Product-6",
    price: 800000,
  },
];

const selectElement = document.querySelectorAll(".select");

selectElement.forEach((el) => {
  el.addEventListener("click", () => {
    selectElement.forEach((element) => {
      element.children[1].classList.remove("show");
    });
    el.children[1].classList.toggle("show");
  });
});

const searchInput = document.querySelector("#product-name");
searchInput.addEventListener("keyup", (e) => {
  if (e.target.value) {
    document.querySelector(".products-list").classList.add("show");
  } else {
    document.querySelector(".products-list").classList.remove("show");
  }
});

const productItems = document.querySelectorAll(".product-item");
productItems.forEach((item) =>
  item.addEventListener("click", () => {
    document.querySelector(".products-box").classList.add("show");
    document.querySelector(".products-list").classList.add("selected");
    document.querySelector(".products-list").classList.remove("show");
  })
);
