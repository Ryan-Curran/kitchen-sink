// 1. append text to li that has which li it is on the page (i.e. 0..n-1)
let elems = document.getElementsByTagName("li");
console.log(elems);
for (let i = 0; i < elems.length; i++) {
    // one approach
    text = document.createTextNode(` ${i}`);
    elems[i].appendChild(text);

    // another approach
    // elems[i].innerHTML += ` ${i}`;
}

// 2. when click div console.log(which div it is on the page, i.e. 0..n-1)
// get a ref to each div in DOM
elems = document.getElementsByTagName("div");
Array.from(elems).forEach((divElem, i) => {
    console.log(`i: ${i}, elems[i]: ${elems[i]}`)
})
// add event listener to each div


