// Build path to images
// Needs to get current directory on the fly since it can
//   change during deployment.
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
var defaultPath = dir.concat("/images/");

function changeImage(trophyName, imageSrc) {

  var path = defaultPath;

  // Game = res[0], Trophy = res[1]
  var res = trophyName.split("-");

  // Check what game the trophy is for
  if (res[0] == "kh1") {
    path = path.concat("kh1/");
  } else {
    path = path.concat("kh2/");
  }

  // Check if the image should be changed to color or Black/White
  if (~imageSrc.indexOf("-bw")) {
    path = path.concat("color/");
    path = path.concat(res[1]);
    path = path.concat(".png");
  } else {
    path = path.concat("bw/");
    path = path.concat(res[1]);
    path = path.concat("-bw.png");
  }

  // Update image
  document.getElementById(trophyName).src = path;
}

// Open the content of a tab
// In this case, the content is the trophies
function openContent(evt, game) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(game).style.display = "block";
  evt.currentTarget.className += " active";
}
