//Header Resize

window.onscroll = () => scrollFunction();

let header = document.getElementsByTagName("header")[0];

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.style.height = "70px";
    header.style.opacity = "0.8";
  } else {
    header.style.height = "100px";
    header.style.opacity = "1";
  }
}
