  function myMenuFunction(){
    var menubtn=document.getElementById("myNavMenu");

    if(menubtn.className === "nav-menu"){
        menubtn.className += "responsive";
    } else{
        menubtn.className = "nav-menu";
    }
  }
/* ---- shadow effect --- */
    window.onscroll = function() {headerShadow()};

    function headerShadow( ) {
      const navheader = document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navheader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)"
        navheader.style.height = "70px"
        navheader.style.lineHeight = "70px"
      } else {
        navheader.style.boxShadow = "none"
        navheader.style.height = "90px"
        navheader.style.lineHeight = "90px"
      }
    }
