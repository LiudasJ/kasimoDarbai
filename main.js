const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const image = document.getElementsByClassName('gallery-image');
var slideLength = -Math.abs(image[0].width);


nextBtn.addEventListener('click', () => {
    for(let i = 0; i < image.length; i++) {
        image[i].style.transform = ("translateX(" + slideLength + "px)");
    }
    slideLength -= 700;
    if (slideLength == (image.length * -700)) {
        slideLength = 0;
    }
})
prevBtn.addEventListener('click', () => {
    slideLength = slideLength + 700;
    for(let i = 0; i < image.length; i++) {
        image[i].style.transform = ("translateX(" + slideLength + "px)");
    }
})