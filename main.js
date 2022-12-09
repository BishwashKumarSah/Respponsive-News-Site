var navLinks = document.getElementById("nav-items");
function hidebar(){
    navLinks.style.right="-500px";
    navLinks.style.boxShadow="none";
}

function showbar(){
    navLinks.style.right="0";
    navLinks.style.boxShadow="0 0 0 10000px rgba(0, 0, 0, 0.5)";
}