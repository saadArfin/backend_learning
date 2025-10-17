// let h1 = document.querySelector("h1");
// //console.dir(h1) //use this or
// //console.log(h1) //or this to console log

// // text/content access ->

// //innerHTML -> primarily used to inject html inside the selected tag

// h1.innerHTML = "<i>Hi bro</i>";

// // innerText -> used to inject text

// h1.innerText = "hloooo"

// // textContent -> used to inject text

// h1.textContent = "hasooo"

// attribute manipulation ->

// getAttribute ->

// let a = document.querySelector("a");
// a.setAttribute("href", "https://google.com");

// //setAttribute ->

// console.log(a.getAttribute("href"));

// //removeAttribute ->

// a.removeAttribute("href");

// dynamic dom manipulation

// craete element

// h2 = document.createElement("h2");

// h2.textContent = "haso yaar";

// document.querySelector("body").append(h2);

// let h1 = document.querySelector("h1");
// h1.classList.add("hi");
// h1.classList.add("helu");

// t1. Select the heading of a page by id and change its text to "welcome"
// h1 = document.getElementById("saad");
// h1.innerText = "welcome";

// t2. select all li elements and print their text using a loop
let liElements = document.querySelectorAll("li");
liElements.forEach(function (li) {
  console.log(li.innerText);
});
