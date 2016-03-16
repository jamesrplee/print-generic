// Responsive Text Sizing
window.addEventListener("resize", setSize);
document.addEventListener("DOMContentLoaded", setSize);

function setSize() {
  var vw   = window.innerWidth / 100
  var vh   = window.innerHeight / 100
  var vmin = Math.min(vw, vh)
  var vmax = Math.max(vw, vh)
  document.documentElement.style.fontSize =  (( vmin * vminsize ) + ( vmax * vmaxsize ) + ( vh * vhsize ))  + "px";
}

var vminsize = 2
var vmaxsize = 1.4
var vhsize   = 2

// CROP MARKS
$(document).ready(function(){
    $( ".page" ).append( $( '<!-- CROP MARKS --> <div class="crop top-left"> <div class="bottom"></div> <div class="right"></div> </div> <div class="crop top-right"> <div class="bottom"></div> <div class="left"></div> </div> <div class="crop bottom-right"> <div class="top"></div> <div class="left"></div> </div> <div class="crop bottom-left"> <div class="top"></div> <div class="right"></div> </div>' ) );
});



