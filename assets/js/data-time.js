function showDateTime() {
  let date = new Date();
  let options = { timeZone: "America/Sao_Paulo" };
  let dateString = date.toLocaleDateString("pt-BR", options);
  let timeString = date.toLocaleTimeString("pt-BR", options);
  document.getElementById("datetime").innerHTML =
    dateString + " - " + timeString;
}

setInterval(showDateTime, 1000);
