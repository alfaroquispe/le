
let itemsSnkSl = document.querySelectorAll('.carousel .snk-sl');
itemsSnkSl.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsSnkSl[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
let itemsSnkDl = document.querySelectorAll('.carousel .snk-dl');
itemsSnkDl.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsSnkDl[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
let itemsSnkFr = document.querySelectorAll('.carousel .snk-fr');
itemsSnkFr.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsSnkFr[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});

let itemsDlDr = document.querySelectorAll('.carousel .dl-dr');
itemsDlDr.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsDlDr[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
let itemsDlBld = document.querySelectorAll('.carousel .dl-bld');
itemsDlBld.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsDlBld[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
let itemsDlCht = document.querySelectorAll('.carousel .dl-cht');
itemsDlCht.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsDlCht[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});

let itemsFdLmd = document.querySelectorAll('.carousel .fd-lmd');
itemsFdLmd.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsFdLmd[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
let itemsFdCrd = document.querySelectorAll('.carousel .fd-crd');
itemsFdCrd.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsFdCrd[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});
let itemsFdPl = document.querySelectorAll('.carousel .fd-pl');
itemsFdPl.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = itemsFdPl[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
});


  
