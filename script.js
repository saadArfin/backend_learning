// let h1 = document.querySelector("h1");
// //console.dir(h1) //use this or
// //console.log(h1) //or this to console log

// // text/content access ->

// //innerHTML -> primarily used to inject html inside the selected tag

// h1.innerHTML = "<i>Hi bro</i>";

// // innerText -> used to inject text

// h1.innerText = "hloooo";

// // textContent -> used to inject text

// h1.textContent = "hasooo";

// //attribute manipulation ->

// //getAttribute ->

// let a = document.querySelector("a");
// a.setAttribute("href", "https://google.com");

// //setAttribute ->

// console.log(a.getAttribute("href"));

// //removeAttribute ->

// a.removeAttribute("href");

// //dynamic dom manipulation

// //craete element

// h2 = document.createElement("h2");

// h2.textContent = "haso yaar";

// document.querySelector("body").append(h2);

// let h1 = document.querySelector("h1");
// h1.classList.add("hi");
// h1.classList.add("helu");

// //t1. Select the heading of a page by id and change its text to "welcome"
// h1 = document.getElementById("saad");
// h1.innerText = "welcome";

// //t2. select all li elements and print their text using a loop
// let liElements = document.querySelectorAll("li");
// liElements.forEach(function (li) {
//   console.log(li.innerText);
// });

// //t3. Select a paragraph and replace its content with:
// // <b>updated</b> by javascript
// let p = document.querySelector("p");
// p.innerHTML = "<b>updated</b> by javascript";

//how do we use setAttribute()?

//document.querySelector("img").setAttribute("src", "https://plus.unsplash.com/premium_photo-1759807887843-8967a570391a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500")
//or we can do
// img = document.querySelector("img");
// img.src =
//   "https://plus.unsplash.com/premium_photo-1759807887843-8967a570391a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500";

//attach title attribute to div

// div = document.querySelector("div");
// //div.title = "hey"

// // or

// div.setAttribute("title", "hey");

//Remove the disabled attribute from a  button
// btn = document.querySelector("button");
// btn.removeAttribute("disabled");

// Create a new list item <li>New Task</li> and add it to the end of a <ul>.
// let li = document.createElement("li");
// li.innerText = "e";
// document.querySelector("ul").appendChild(li);

// create a new image element with a alt, source and add it at the top of a div

// let img = document.createElement("img");

// img.src =
//   "https://plus.unsplash.com/premium_photo-1759807887843-8967a570391a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=500";
// img.alt = "unsplash image";
// document.querySelector("div").prepend(img);

// img.classList.add("placeholder")

//select the first element in a list and delete it from the dom.

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// ul.removeChild(li)