function upDate(previewPic) {
  console.log("Mouse is over an image");
  console.log("alt:", previewPic.alt);
  console.log("src:", previewPic.src);

  document.getElementById("image").innerHTML = previewPic.alt;
  document.getElementById("image").style.backgroundImage =
    "url('" + previewPic.src + "')";
}

function unDo() {
  console.log("Mouse left the image");

  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML =
    "Hover over an image below to display here.";
}