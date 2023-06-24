


// / ===================================================================
var modal = document.getElementById("product__modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById("expandedImg-product1");
var img2 = document.getElementById("expandedImg-product2");
var img3 = document.getElementById("expandedImg-product3");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
img1.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
}
img2.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
}
img3.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  // captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close1")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// ===================================================================