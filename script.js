
<<<<<<< Updated upstream
        function openCity(evt, cityName) {
=======

  
   
  

 
        function tabbb(evt, tabbo) {
>>>>>>> Stashed changes
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabbo).style.display = "block";
            evt.currentTarget.className += " active";
        }

function toggleMenu() {
var x = document.getElementById("myNavbar");
var icon = document.querySelector(".icon i");

if (x.className.indexOf("responsive") === -1) {
x.className += " responsive";
icon.classList.remove("fa-bars");
icon.classList.add("fa-times");
} else {
x.className = x.className.replace(" responsive", "");
icon.classList.remove("fa-times");
icon.classList.add("fa-bars");
}
}
