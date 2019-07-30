let header = document.querySelectorAll(".overLink");
for (var i = 0; i < header.length; i++)
  (function(i) {
    header[i].addEventListener("mouseover", function(event) {
      event.target.style.background = "#DCDCDC";
    });
  })(i);

let headerOut = document.querySelectorAll(".overLink");
for (var i = 0; i < headerOut.length; i++)
  (function(i) {
    headerOut[i].addEventListener("mouseout", function(event) {
      event.target.style.background = "black";
    });
  })(i);

let sign = document.querySelectorAll(".signUp");
for (i = 0; i < sign.length; i++)
  (function(i) {
    sign[i].addEventListener("mouseover", function(event) {
      event.target.style.background = "#DCDCDC";
    });
  })(i);

let signUp = document.querySelectorAll(".signUp");
for (i = 0; i < signUp.length; i++)
  (function(i) {
    signUp[i].addEventListener("mouseout", function(event) {
      event.target.style.background = "#D3D3D3";
    });
  })(i);

