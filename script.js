const counter = document.querySelector(".number span");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const addCart = document.querySelector(".addCart");
const items = document.querySelector(".items");
const list = document.querySelector(".cart-items");
const cart = document.querySelector(".cart");

let cartVisible = false;
cart.addEventListener("click", function () {
  if (!cartVisible) {
    list.classList.remove("cart-clicked");
  } else {
    list.classList.add("cart-clicked");
  }

  cartVisible = !cartVisible;
});
document.addEventListener("click", function (event) {
  if (!cart.contains(event.target) && !list.contains(event.target)) {
    if (cartVisible) {
      list.classList.add("cart-clicked");
      cartVisible = false;
    }
  }
});
let number = 0;

plus.addEventListener("click", function () {
  let content = Number(counter.textContent);
  counter.textContent = content + 1;
  number = content + 1;
  return content + 1;
});
minus.addEventListener("click", function () {
  let content1 = Number(counter.textContent);
  counter.textContent = content1 - 1;
  return content1 - 1;
});

let cmpt = 1;

addCart.addEventListener("click", function () {
  let quantity = Number(counter.textContent);
  let defaultText = document.querySelector(".numb");
  if (defaultText) {
    defaultText.remove();
  }
  let item = `
    <div class="item">
      <img class="sneaker-img" src="/images/image-product-1-thumbnail.jpg" alt="" />
      <div class="info">
        <p>Fall limited Edition Sneakers</p>
        <span>$125.00</span>
        <span>x ${quantity}</span>
        <span>$${125.0 * quantity}</span>
      </div>
      <img class="delete" src="images/icon-delete.svg" alt="" />
    </div>
    <button>Checkout</button>`;
  let numberSneakers = document.querySelector(".counter");

  if (cmpt === 1) {
    items.insertAdjacentHTML("beforeend", item);
    numberSneakers.textContent = quantity;
    cmpt = cmpt - 1;
  }

  let deleteItem = document.querySelector(".delete");

  deleteItem.addEventListener("click", function () {
    const childNode1 = document.querySelector(".items .item");
    const childNode2 = document.querySelector("button");
    if (childNode1 && childNode2) {
      childNode1.remove();
      childNode2.remove();
      numberSneakers.textContent = 0;
      defaultText = document.createElement("span");
      defaultText.textContent = "No items in your cart";
      items.appendChild(defaultText);
      cmpt++;
    }
  });
});

//images
let images = document.querySelectorAll(".img-js");

images.forEach((image) => {
  image.addEventListener("click", function () {
    let src = image.getAttribute("src");
    src = src.replace("-thumbnail", "");
    let mainImage = document.querySelector(".main-img");
    mainImage.src = src;
    image.classList.toggle("clicked");
    images.forEach((img) => {
      if (img !== image) {
        img.classList.remove("clicked");
      }
    });
  });
});

//big images

let fullImage = document.querySelector(".big");
let container = document.querySelector(".container");
let beforeElement = document.querySelector(".container .before");
let opacity = document.querySelector(".opacity");

let closeButton = document.querySelector(".close");
closeButton.addEventListener("click", function () {
  beforeElement.style.display = "none";
  opacity.style.display = "none";
});
let mainImage = document.querySelector(".main-img");
mainImage.addEventListener("click", function () {
  beforeElement.style.display = "flex";
  let src = mainImage.getAttribute("src");
  fullImage.src = src;
  opacity.style.display = "flex";
  beforeElement.src = mainImage.src;
});
let miniImage = document.querySelectorAll(".minis img");
let miniImageArr = Array.from(miniImage);
let leftArrow = document.querySelector(".prev");
let rightArrow = document.querySelector(".next");
let index = 0;
leftArrow.addEventListener("click", function () {
  let src = mainImage.getAttribute("src");

  let currentIndex = src.slice(
    src.lastIndexOf("-", src.lastIndexOf(".") - 1) + 1,
    src.lastIndexOf(".")
  );

  fullImage.src = miniImageArr[index + miniImageArr.length - 1].src.replace(
    "-thumbnail",
    ""
  );
  index--;
  if (index == -4) {
    index = 0;
  }
});
rightArrow.addEventListener("click", function () {
  let src = mainImage.getAttribute("src");

  let currentIndex = src.slice(
    src.lastIndexOf("-", src.lastIndexOf(".") - 1) + 1,
    src.lastIndexOf(".")
  );

  fullImage.src = miniImageArr[index + 1].src.replace("-thumbnail", "");
  index++;
  if (index == 3) {
    index = -1;
  }
});

// Now you can manipulate the beforeElement as needed
