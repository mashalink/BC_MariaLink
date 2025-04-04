function changeImage() {
  var image = document.getElementById("myImage");
  if (image.src.split("/").pop() === "pic_bulbon.gif") {
    image.src = "./img/pic_bulboff.gif";
  } else {
    image.src = "./img/pic_bulbon.gif";
  }
}
