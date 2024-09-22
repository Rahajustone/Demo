const sideBar = document.getElementById('sidebar');

const listLinks = document.querySelectorAll("#sidebar ul li");
listLinks.forEach(el => {
  el.addEventListener('click', function(){
    listLinks.forEach(function(li){
      li.classList.remove('active');
    });
    this.classList.add('active');
  })
});

function toggleSideBar() {
  sideBar.classList.toggle('show');
}