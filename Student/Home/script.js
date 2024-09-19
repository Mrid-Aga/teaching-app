indicator = document.getElementById("indicator")
home = document.getElementById("Home")
discover=document.getElementById("Discover")
account=document.getElementById("Account")

indicator.style.left=home.offsetLeft+ "px"
indicator.style.width = home.offsetWidth+"px"

home.onclick = function(){
    indicator.style.width=home.offsetWidth+"px"
    indicator.style.left=home.offsetLeft+"px"
};

discover.onclick = function(){
    indicator.style.width=discover.offsetWidth+"px"
    indicator.style.left=discover.offsetLeft+"px"
};