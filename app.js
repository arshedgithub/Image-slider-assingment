// when mouse hover over
function hover(x) {
  // x represents "this" element
  x.style.opacity = "0.2";                // change style
  x.style.border = "1px solid black";     // change border
  var dis = document.getElementById("display"); // catch the display id
  dis.src = x.src;                        // change src attribute of display element
}

// when mouse leave
function leave(x) {
  x.style.opacity = "1";      // change css
  x.style.border = "none";    // change css
}
