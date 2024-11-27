document.getElementById("submitButton").addEventListener("click", function() {
  if (validateForm()) {
      checkCaptcha();
  }
}, false);

function validateForm() {
  var payOptions = document.getElementsByName("pay");
  var isOptionSelected = false;
  for (var i = 0; i < payOptions.length; i++) {
    if (payOptions[i].checked) {
      isOptionSelected = true;
      var subDetails = payOptions[i].parentNode.querySelector(".content").querySelectorAll("input[type=text], select");
      for (var j = 0; j < subDetails.length; j++) {
        if (subDetails[j].value === "") {
          alert("Please fill out all the required fields.");
          return false;
        }
      }
    }
  }
  if (!isOptionSelected) {
    alert("Please select a payment option.");
    return false;
  }
  return true;
}
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
      for (var j = 0; j < coll.length; j++) {
          if (coll[j] !== this) {
              coll[j].nextElementSibling.style.display = "none";
          }
      }

      var content = this.nextElementSibling;
      content.style.display = (content.style.display === "block") ? "none" : "block";
  });
}

let captchaText = document.getElementById('captcha');
let ctx = captchaText.getContext("2d");
ctx.font = "30px Roboto";
ctx.fillStyle = "#08e5ff";

let userText = document.getElementById('textBox');
let output = document.getElementById('output');
let refreshButton = document.getElementById('refreshButton');
var captchaStr = "";

let alphaNums = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');

function generateCaptcha() {
  captchaStr = Array.from({length: 7}, () => alphaNums[Math.floor(Math.random() * alphaNums.length)]).join('');

  ctx.clearRect(0, 0, captchaText.width, captchaText.height);
  ctx.fillText(captchaStr, captchaText.width / 4, captchaText.height / 2);

  output.innerHTML = "";
}

generateCaptcha();

function checkCaptcha() {
  if (userText.value === captchaStr) {
      output.className = "correctCaptcha";
      output.innerHTML = "Correct!";
      window.location.replace("../Stationary/load.html");
  } else {
      output.className = "incorrectCaptcha";
      output.innerHTML = "Incorrect, please try again!";
  }
}

userText.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
      checkCaptcha();
  }
});

refreshButton.addEventListener('click', generateCaptcha);
