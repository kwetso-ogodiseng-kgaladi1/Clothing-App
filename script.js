// hamburger menu
hamburger = document.querySelector('.hamburger');
hamburger.onclick = function () {
   navbar = document.querySelector('.nav-bar');
   navbar.classList.toggle('active')
}
const womensSection = [
  {
    product: "https://i.pinimg.com/564x/81/de/e6/81dee6a4d947473be3aa761704691aff.jpg",
    price: '$65'
  },
  {
    product: "https://i.pinimg.com/564x/eb/5c/09/eb5c09552686d7e8abcf1448663313c6.jpg",
    price: '$67'
  },
  {
    product: "https://i.pinimg.com/564x/72/65/ef/7265ef18108679b76f2a3cc1ed171869.jpg",
    price: '$092'
  },
  {
    product: "https://i.pinimg.com/564x/78/6e/1f/786e1fc60564417eb31885901319ca8a.jpg",
    price: '$81'
  },
  {
    product: "https://i.pinimg.com/564x/2c/0a/28/2c0a28ba023f0a891161c5c4f154aba8.jpg",
    price: '$65'
  }
]


const dataWomensSection2 = document.querySelector('[data-womens-section2]')
dataWomensSection2.classList = 'women-section'
dataWomensSection2.style.display = 'none'
let womensStorage = '';
for (const { product, price } of womensSection) {
  womensStorage += `
    <div class="most-rated-item">
      <div class="most-rated-image">
        <img src="${product}">
      </div>
      <div class="most-rated-body">
        <h4>Women</h4>
        <div class="icons">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div class="price">
          <label>${price}</label>
        </div>
      </div>
    </div>`;
}
dataWomensSection2.innerHTML = `<div class="women-section">${womensStorage}</div> <button>uggg</button>`;
const dataWomenGoHere = document.querySelector("[data-woman-go-here]")
dataWomenGoHere.addEventListener("click", (e) => {
    dataWomensSection2.style.display = 'block'
    dataMensSection2.style.display = 'none'
    window.location.href = '#women-section'
})
const mensSection = [
    {
      productMen: "https://i.pinimg.com/564x/05/07/64/050764f0142f2169b387ad38d88a45f4.jpg"
    },
    {
      productMen: "https://i.pinimg.com/564x/99/7c/0d/997c0dfb79cbb95228d75d68c29e2043.jpg"
    },
    {
      productMen: "https://i.pinimg.com/236x/16/ac/be/16acbea58724adb45f41817f32a159ad.jpg"
    },
    // {
    //   productMen: "https://i.pinimg.com/564x/78/6e/1f/786e1fc60564417eb31885901319ca8a.jpg"
    // },
    // {
    //   productMen: "https://i.pinimg.com/564x/2c/0a/28/2c0a28ba023f0a891161c5c4f154aba8.jpg"
    // }
  ]
  const dataMensSection2 = document.querySelector('[data-mens-section2]')
  dataMensSection2.classList = 'men-section'
  dataMensSection2.style.display = 'none'
  let mensStorage =' ';
  for (const {productMen} of mensSection){
  mensStorage +=
  `
      <div class="most-rated-item">
      <div class="most-rated-image">
          <img src= "${productMen}">
      </div>
      <div class="most-rated-body">
          <h4>Men </h4>
          <div class="icons">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
          </div>
          <div class="price">
              <label class="sale">$89.99</label>
              <label>$49.99</label>
          </div>
      </div>
      </div>
  `
  dataMensSection2.innerHTML = mensStorage
  }
  const dataMenGoHere = document.querySelector("[data-men-go-here]")
  dataMenGoHere.addEventListener("click", (e) => {
      dataMensSection2.style.display = 'block'
      dataWomensSection2.style.display = 'none'
      window.location.href = '#men-section'
  })
  document.querySelector('[data-clothes-list]').addEventListener('click', (e) => {
    dataMensSection2.style.display = 'block'
      dataWomensSection2.style.display = 'none'
      window.location.href = '#women-section'
  })
