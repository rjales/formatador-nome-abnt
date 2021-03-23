function formatarAbnt(string) {
  var nomeArray = string.split(" ");
  novoNome = nomeArray[nomeArray.length-1].toUpperCase() + ", " + nomeArray[0].charAt(0).toUpperCase() + nomeArray[0].slice(1) + " " + nomeArray[1].charAt(0).toUpperCase() + ". " + nomeArray[2].charAt(0).toUpperCase() + "."
  document.getElementById("nomeFormatado").value = novoNome;
}