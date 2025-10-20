//change event ->
// let device = document.querySelector("#device");
// let select = document.querySelector("select");
// select.addEventListener("change", (eventy) => {
//   device.textContent = `${eventy.target.value} device selected!`;
// });

//keydown event ->
// let h3 = document.querySelector("h3");
// window.addEventListener("keydown", (evt) => {
//   if (evt.key === " ") {
//     h3.textContent = "spc";
//   } else {
//     h3.textContent = evt.key;
//   }
// });

//file input handling ->
let childDiv = document.querySelector("#childDiv");
let fileInp = document.querySelector("#fileInp");
childDiv.addEventListener("click", () => {
  fileInp.click();
});

fileInp.addEventListener("change", (evt) => {
  file = evt.target.files[0];
  if (file) {
    childDiv.textContent = file.name;
  }
});
