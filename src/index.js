import './less/index.less'

// Your code goes here!
// `mouseover`
//   * [ ] `keydown`
//   * [ ] `wheel`
//   * [ ] `load`
//   * [ ] `focus`
//   * [ ] `resize`
//   * [ ] `scroll`
//   * [ ] `select`
//   * [ ] `dblclick`
//   * [ ] `drag / drop`

//keydown turn intro h2 red 1
const introHead = document.querySelector(".intro h2");
document.addEventListener("keydown", anyKey);
function anyKey(evt) {
    evt.target.value = introHead.style.color = "red";
}
//2
const zoomImg = document.querySelectorAll('img');

function zoom(event) {
    let scale = 1;
    event.preventDefault();
  
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);
  
    event.target.style.transform = `scale(${scale})`;
};
zoomImg.forEach(function(image){
    image.addEventListener('wheel', zoom);
});  

//3
function changePic(picture){
    picture.target.setAttribute("src", "https://picsum.photos/200/300");
}
zoomImg.forEach(function(images) {
    images.addEventListener("click", changePic)
});
//4
const hoverParas = document.querySelector("p")
console.log(hoverParas)
hoverParas.addEventListener("mouseover", (evt) => {
    evt.target.style.color = 'orange';
});
//5
const logo = document.querySelector(".logo-heading")
logo.addEventListener("click", colors)
function colors(color1){
    color1.target.style.color = 'red';
}
const footers = document.querySelector(".footer");
footers.addEventListener("click", colors);

const button = document.querySelector(".btn");
button.addEventListener("click", colors);

const destination1 = document.querySelector(".destination");
destination1.addEventListener("click", colors);

const content = document.querySelector(".content-destination h2")
content.addEventListener("click", colors);

const contentparas = document.querySelector(".content-destination p");
contentparas.addEventListener("click", colors);
