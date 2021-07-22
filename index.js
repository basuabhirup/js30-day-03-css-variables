for (var i = 0; i < document.querySelectorAll("input").length; i++) {
  document.querySelectorAll("input")[i].addEventListener("mousemove", changeProperties);
  document.querySelectorAll("input")[i].addEventListener("change", changeProperties);
}

function changeProperties() {
  var suffix = this.dataset.sizing || ""; // to set the px unit wherever applicable
  var root = document.querySelector(":root");
  root.style.setProperty("--" + this.name , (this.value + suffix));
}
