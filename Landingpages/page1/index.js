const tabButton = document.querySelectorAll(".tab_button");
const tabContent = document.querySelectorAll(".tab_content_list");

tabButton.forEach(function (el) {
   el.addEventListener("click", openTabs);
});


function openTabs(el) {
   const btn = el.currentTarget;
   const content = btn.dataset.tab;

   tabContent.forEach(function (el) {
      el.classList.remove("active");
   });

   tabButton.forEach(function (el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + content).classList.add("active");

   btn.classList.add("active");
}

function openNav() {
   document.getElementById('toggle').classList.toggle("change");
   document.getElementById('showNav').classList.toggle('activated');
   document.getElementById('showNav').classList.toggle('slide-in');
}

function openLogin() {
   const loginContainer = document.getElementById("login-button");

   loginContainer.classList.add('activated');

   if (loginContainer.classList.contains('activated')) {
      const responsiveLoginContainer = document.querySelector('.responsive_login_container');

      responsiveLoginContainer.style.display = 'flex';

      let scrollPosition = responsiveLoginContainer.offsetTop - 60;

      window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
   }
}