var toggleButton = document.getElementById('toggle-btn');
var sidebar = document.getElementById('sidebar');

function toggleSideBar(){
  sidebar.classList.toggle('close');
  toggleButton.classList.toggle('rotate-left');
  closeAllSubMenus();
}

function toggleSubMenu(button) {
  if(!button.nextElementSibling.classList.contains('show')){
    closeAllSubMenus();
  }
  button.nextElementSibling.classList.toggle('show');
  button.classList.toggle('rotate');

  if(sidebar.classList.contains('close')){
    sidebar.classList.toggle('close');
    toggleButton.classList.toggle('rotate');
  }
}

function closeAllSubMenus(){
  Array.from(sidebar.getElementsByClassName('show')).forEach(
    ul =>
      {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate');
      }
  );
}