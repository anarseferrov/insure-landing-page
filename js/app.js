const myNav = document.getElementById("myNav");

const hamburgerMenu = () => {
  if (myNav.className === "myNav") {
    myNav.className += " responsive";
    document.body.style.overflowY = "hidden";
    document.getElementById("open-icon").style.display = "none";
    document.getElementById("close-icon").style.display = "block";
  } else {
    myNav.className = "myNav";
    document.body.style.overflowY = "visible";
    document.getElementById("open-icon").style.display = "block";
    document.getElementById("close-icon").style.display = "none";
  }
};

window.onresize = () => {
  if (window.innerWidth >= 600) {
    document.getElementById("open-icon").style.display = "none";
  }
  if (window.innerWidth <= 600) {
    document.getElementById("open-icon").style.display = "block";
  }
};
