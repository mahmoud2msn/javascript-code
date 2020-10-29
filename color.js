/*document.addEventListener("DOMContentLoaded", function () {
  let welcom = document.querySelector("#hello");
  document.querySelector("#red").onclick = function () {
    welcom.style.color = "red";
  };
  document.querySelector("#green").onclick = function () {
    welcom.style.color = "green";
  };
  document.querySelector("#yellow").onclick = function () {
    welcom.style.color = "yellow";
  };
});*/

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button").forEach(function (button) {
    Button.onclick = function () {
      document.querySelector("#hello").style.color = button.dataset.color;
    };
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button").forEach((button) => {
    button.onclick = function () {
      document.querySelector("hello").style.color = button.dataset.color;
    };
  });
});
