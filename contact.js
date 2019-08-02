// @twitter: #00aced;
// @linkedin: #0077B5;
// @github:  #6e5494;
// @freeCodeCamp: #006400;

// nav links
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

// nav button
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

// footer button
let msg = document.querySelectorAll(".sendMsg");
for (i = 0; i < msg.length; i++)
  (function(i) {
    msg[i].addEventListener("mouseover", function(event) {
      event.target.style.background = "#DCDCDC";
    });
  })(i);

let msgOut = document.querySelectorAll(".sendMsg");
for (i = 0; i < msgOut.length; i++)
  (function(i) {
    msgOut[i].addEventListener("mouseout", function(event) {
      event.target.style.background = "#D3D3D3";
    });
  })(i);

// linkedin
let lin = document.querySelectorAll(".linkedin");
for (i = 0; i < lin.length; i++)
  (function(i) {
    lin[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = "#00aced";
    });
  })(i);

let linOut = document.querySelectorAll(".linkedin");
for (i = 0; i < linOut.length; i++)
  (function(i) {
    linOut[i].addEventListener("mouseleave", function(event) {
      event.target.style.backgroundColor = "black";
    });
  })(i);

// github
let git = document.querySelectorAll(".github");
for (i = 0; i < git.length; i++)
  (function(i) {
    git[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = "#6e5494";
    });
  })(i);

let gitOut = document.querySelectorAll(".github");
for (i = 0; i < gitOut.length; i++)
  (function(i) {
    gitOut[i].addEventListener("mouseleave", function(event) {
      event.target.style.backgroundColor = "black";
    });
  })(i);

// twitter
let twi = document.querySelectorAll(".twitter");
for (i = 0; i < twi.length; i++)
  (function(i) {
    twi[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = "#00aced";
    });
  })(i);

let twiOut = document.querySelectorAll(".twitter");
for (i = 0; i < twiOut.length; i++)
  (function(i) {
    twiOut[i].addEventListener("mouseleave", function(event) {
      event.target.style.backgroundColor = "black";
    });
  })(i);

// free code camp
let fcc = document.querySelectorAll(".freeCodeCamp");
for (i = 0; i < fcc.length; i++)
  (function(i) {
    fcc[i].addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = "#006400";
    });
  })(i);

let fccOut = document.querySelectorAll(".freeCodeCamp");
for (i = 0; i < fccOut.length; i++)
  (function(i) {
    fccOut[i].addEventListener("mouseleave", function(event) {
      event.target.style.backgroundColor = "black";
    });
  })(i);
