const imgInput = document.querySelector("#imgInput");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const canvas = document.querySelector("#meme");

const image = document.querySelector('img');
/* This is how you change the src within that image:
img.setAttribute('src', 'https://www.news10.com/wp-content/uploads/sites/64/2022/07/Cat.jpg?w=2560&h=1440&crop=1')
*/
/* This gets you the URL from the input: imgInput.value;*/

/* This gets you the preview URL */
const previewURL = image.getAttribute('src');

imgInput.addEventListener("change", (e) => {
    image.setAttribute('src', imgInput.value);
});

const displayTop = document.querySelector("#top-text");
const displayBottom = document.querySelector("#bottom-text");

topText.addEventListener("change", (e) => {
    displayTop.innerText = topText.value;
});
bottomText.addEventListener("change", (e) => {
    displayBottom.innerText = bottomText.value;
});