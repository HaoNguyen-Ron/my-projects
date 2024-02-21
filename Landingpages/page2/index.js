const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: false,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },  
});


// toggle button
function myFunction() {
  document.getElementById('toggle').classList.toggle("change");
  document.getElementById('showNav').classList.toggle('activated')
  document.getElementById('addBlurr').classList.toggle('blurr')
}

