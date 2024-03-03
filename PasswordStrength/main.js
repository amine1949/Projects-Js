var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strenght");

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (pass.value.length < 4) {
    str.innerHTML = "Weak";
    pass.style.borderColor = "#ff5952";
    msg.style.color = "#ff5952";
  } else if (pass.value.length >= 4 && pass.value.length < 8) {
    str.innerHTML = "Medium";
    pass.style.borderColor = "yellow";
    msg.style.color = "yellow";
  } else if (pass.value.length >= 8) {
    str.innerHTML = "Strong";
    pass.style.borderColor = "#26d730";
    msg.style.color = "#26d730";
  }
});
