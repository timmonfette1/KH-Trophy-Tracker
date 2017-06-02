// Build path to images
// Needs to get current directory on the fly since it can
//   change during deployment.
var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
//var defaultPath = "file://".concat(dir);
var defaultPath = defaultPath.concat("/images/");

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
