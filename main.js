// function menuToggle() {
//   const toggleMenu = document.getElementsByClassName('menu');

//   menu.style.visibility == 'hidden'
//     ? (menu.style.visibility = 'visible')
//     : (menu.style.visibility = 'hidden');

//   menu.style.visibility == 'visible'
//     ? (menu.style.visibility = 'hidden')
//     : (menu.style.visibility = 'visible');
// }

// function menuOff() {
//   const turnMenuOff = document.getElementsByClassName('menu');
//   menu.style.setProperty('visibility', 'hidden');
// }

// Model Style Open & Close

function openMenu() {
  let modalTrigger = document.querySelectorAll('.menu-trigger');

  modalTrigger.forEach(function (trigger) {
    trigger.addEventListener('.click', function (event) {
      // remove # from menu
      const target = this.getAttribute('href').substr(1);

      // use dynamic target to reference given modal
      const menuWindow = document.getElementById(target);

      if (menuWindow.classList) {
        menuWindow.classList.add('open');
      }

      event.preventDefault();
    });
  });
}
