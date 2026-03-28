// Menu Functions
document.getElementById("menu-open").onclick = function() {
    document.getElementById("menu").style = "right: 0";
    document.getElementById("menu-body-darken").style = "pointer-events: all; opacity: 0.6";
}
document.getElementById("menu-close").onclick = function() {
    document.getElementById("menu").style = "right: -100%";
    document.getElementById("menu-body-darken").style = "pointer-events: none; opacity: 0";
}
document.getElementById("menu-body-darken").onclick = function() {
    document.getElementById("menu").style = "right: -100%";
    document.getElementById("menu-body-darken").style = "pointer-events: none; opacity: 0";
}

// Menu Logo Click Function
document.getElementById("menu-logo").onclick = function() {
    window.open("index.html", "_self");
}
// Interactive Feature
document.getElementById("click1").onclick = function() {
    document.getElementById("click-info3").style = "display: none;";
    document.getElementById("click-info2").style = "display: none;";
    document.getElementById("click-info1").style = "display: block;";
}
document.getElementById("click2").onclick = function() {
    document.getElementById("click-info3").style = "display: none;";
    document.getElementById("click-info1").style = "display: none;";
    document.getElementById("click-info2").style = "display: block;";
}
document.getElementById("click3").onclick = function() {
    document.getElementById("click-info1").style = "display: none;";
    document.getElementById("click-info2").style = "display: none;";
    document.getElementById("click-info3").style = "display: block;";
}
document.getElementById("click-close1").onclick = function() {
    document.getElementById("click-info1").style = "display: none;";
}
document.getElementById("click-close2").onclick = function() {
    document.getElementById("click-info2").style = "display: none;";
}
document.getElementById("click-close3").onclick = function() {
    document.getElementById("click-info3").style = "display: none;";
}