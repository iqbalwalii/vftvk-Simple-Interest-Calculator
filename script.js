function compute() {
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var year = new Date().getFullYear() + parseInt(years);
  var principal = document.getElementById("principal").value;
  const amt =  Number(principal)
  console.log(amt)
  var interest = (principal * years * rate) / 100;
  var amount = interest;
  p = document.getElementById("principal").value;
  if (p < 0) {
    alert("Enter a positive number");
  }
  document.getElementById("principal").focus();

  document.getElementById("result").innerHTML =
    "<p> If you deposit <span style = background-color:#F0B929;>" +
    principal +
    "</span> ,<br>at an interest rate of <span style = background-color:#F0B929;>" +
    rate +
    "%</span><br>You will receive an amount of <span style = background-color:#F0B929;>" +
    amount +
    "</span>,<br>in the year " +
    year +
    "<br></p>";
  return interest;
}
function updateRate() {
  var inter = compute();
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
  document.getElementById("result").innerText = inter;
}
