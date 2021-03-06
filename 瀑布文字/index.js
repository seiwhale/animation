/* eslint-disable */
function init() {
  (cvs.height = window.innerHeight), (cvs.width = window.innerWidth);
  var t = cvs.width / fontSize;
  (charSet = "W I S H 3 D E A R T H"), (charSet = charSet.split(""));
  for (var n = 0; t > n; n++) drops[n] = Math.floor(Math.random() * cvs.height);
}

function rain() {
  (ctx.fillStyle = "rgba(0, 0, 0, 0.05)"),
    ctx.fillRect(0, 0, cvs.width, cvs.height);
  for (var t = 0; t < drops.length; t++) {
    var n = charSet[Math.floor(Math.random() * charSet.length)];
    (ctx.fillStyle = altiColor()),
      ctx.fillText(n, t * fontSize, drops[t] * fontSize),
      Math.random() > 0.99 && (drops[t] = 0),
      drops[t]++;
  }
}

function altiColor() {
  var t = ["#FFF", "#69A3D5"];
  return t[Math.floor(3 * Math.random())];
}

var cvs,
  ctx,
  charSet,
  drops = [],
  font = "arial",
  fontSize = 10;
  
window.onload = function() {
  cvs = document.getElementById("canvas");
  ctx = cvs.getContext("2d");
  (ctx.font = fontSize + "px " + font),
    init(),
    setInterval(rain, 40),
    window.addEventListener("resize", function(t) {
      init();
    });
};
