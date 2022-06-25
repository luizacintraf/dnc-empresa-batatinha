import changeMode from './darkMode.js'

window.addEventListener("load", () => {
  var elipses = document.getElementById("elipses");
  elipses.addEventListener("click", () => {
    changeMode();
  });

  document.getElementById("download").addEventListener("click", () => {
    window.open("public/ebook.pdf", "_blank");
  });
});
