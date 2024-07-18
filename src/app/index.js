// =require ../core/config/js/index.js
// =require ../core/lib/js/index.js
// =require ../core/lib/js/nouislider.min.js
// =require ../core/lib/js/wNumb.js

//tabs

let tabs = document.querySelectorAll('.tab__input');
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', (event) => {
    tabs[i].parentElement.classList.toggle('active');
  });
}

//rangeSliders

var priceSlider = document.getElementById('priceSlider');
noUiSlider.create(priceSlider, {
  start: [234, 7000],
  step: 1,
  connect: true,
  format: wNumb({
    decimals: 0,
    postfix: ' $',
    encoder: function( a ){
      return Math.round(a*100)/100;
    }
  }),
  range: {
    'min': 234,
    'max': 9999
  },
  tooltips: [
    false,
    true
  ]
});
var priceSnapValues = [
  document.getElementById('price-snap-value-lower'),
  document.getElementById('price-snap-value-upper')
];
priceSlider.noUiSlider.on('update', function (values, handle) {
  priceSnapValues[handle].innerHTML = values[handle];
});

var thcSlider = document.getElementById('thcSlider');
noUiSlider.create(thcSlider, {
  start: [0, 65],
  step: 1,
  behaviour: 'unconstrained',
  connect: true,
  format: wNumb({
    decimals: 0,
    postfix: ' %',
    encoder: function( a ){
      return Math.round(a*100)/100;
    }
  }),
  range: {
    'min': 0,
    'max': 100
  },
  tooltips: [
    false,
    true
  ]
});
var thcSnapValues = [
  document.getElementById('thc-snap-value-lower'),
  document.getElementById('thc-snap-value-upper')
];
thcSlider.noUiSlider.on('update', function (values, handle) {
  thcSnapValues[handle].innerHTML = values[handle];
});

var cbdSlider = document.getElementById('cbdSlider');
noUiSlider.create(cbdSlider, {
  start: [0, 65],
  step: 1,
  behaviour: 'unconstrained',
  connect: true,
  format: wNumb({
    decimals: 0,
    postfix: ' %',
    encoder: function( a ){
      return Math.round(a*100)/100;
    }
  }),
  range: {
    'min': 0,
    'max': 100
  },
  tooltips: [
    false,
    true
  ]
});
var cbdSnapValues = [
  document.getElementById('cbd-snap-value-lower'),
  document.getElementById('cbd-snap-value-upper')
];
cbdSlider.noUiSlider.on('update', function (values, handle) {
  cbdSnapValues[handle].innerHTML = values[handle];
});

//checkbox

let checkTitle = document.querySelectorAll('.filter__title');
for (let i = 0; i < checkTitle.length; i++) {
  checkTitle[i].addEventListener('click', (event) => {
    checkTitle[i].parentElement.classList.toggle('active');
  });
}

//badges

let checkbox = document.querySelectorAll('.checkbox__input');
let badgeItem = document.querySelectorAll('.badge__item');


for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', (event) => {
    let data = checkbox[i].getAttribute('data-num');
    let checkText = checkbox[i].parentElement.querySelector('.checkbox__text');
    let str = checkText.innerHTML;

    let result = function filterItems() {
      return Object.values(badgeItem).filter((el) => el.getAttribute('data-num') === data);
    }

    if(result().length === 0) {
      let badge = document.createElement('li');
      badge.className = "badge__item";
      badge.innerHTML = str;
      badge.setAttribute('data-num', data);
      document.querySelector('.badge').append(badge);
      badgeItem = document.querySelectorAll('.badge__item');
    } else {
      result()[0].remove()
      badgeItem = document.querySelectorAll('.badge__item');
    }

    deleteBadge()
  });
}


function deleteBadge () {
  for (let i = 0; i < badgeItem.length; i++) {
    badgeItem[i].addEventListener('click', (event) => {
      let checkbox = document.querySelectorAll('.checkbox__input');
      let data = badgeItem[i].getAttribute('data-num');

      let result = function filterItems() {
        return Object.values(checkbox).filter((el) => el.getAttribute('data-num') === data);
      }

      result()[0].checked = false;
      badgeItem[i].remove();
      badgeItem = document.querySelectorAll('.badge__item');
    });
  }
}

deleteBadge()
