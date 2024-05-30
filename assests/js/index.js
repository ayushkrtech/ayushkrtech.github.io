  function myMenuFunction(){
    var menubtn=document.getElementById("myNavMenu");

    if(menubtn.className === "nav-menu"){
        menubtn.className += "responsive";
    } else{
        menubtn.className = "nav-menu";
    }
  }
