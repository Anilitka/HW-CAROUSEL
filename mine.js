let prev = document.querySelector('.btn_right');
let next = document.querySelector('.btn_left');
let images = document.querySelector('.carousel_container').children;
let active = document.querySelector('.active')
let dots = document.querySelector('.dots_container').children
let totalImgs = images.length - 1;
let totalDot = dots.length ;
let index = 0;


function nextImage(element) {
if(element == 'next') {
    index++;
    if(index === totalImgs || index === totalDot) {
      index = 0;
    }
} else {
    if(index === 0) {
      index = totalImgs - 1;
      index = totalDot - 1;
    } else {
      index--;
    }
};

for(let i = 0; i < images.length; i++) {
images[i].classList.remove('active');
}
images[index].classList.add('active');

for(let j = 0; j < dots.length; j++) {
    dots[j].classList.remove('activ');
    }
    dots[index].classList.add('activ');
};




prev.addEventListener('click', function() {
    nextImage('next');
});
  
next.addEventListener('click', function() {
    nextImage('prev');
});


function currentItem(n){
nextImage(index = n)
}
