$(document).ready( function () {
  $('.mat-card-content').DataTable();
});
document.addEventListener("DOMContentLoaded", function() {
  // Obter conteúdo da tabela
  var tabela = document.querySelector("#containerPrincipal > div > app-emissao-dar-iptu > shared-page > shared-page-content > div > mat-card > mat-card-content > shared-responsive-selector > res-desktop > div > mat-table");
  if (tabela) {
    // Extrair dados da tabela
    var linhas = tabela.querySelectorAll("mat-row");
    var colunas = [];
    for (var i = 0; i < linhas.length; i++) {
      var celulas = linhas[i].querySelectorAll("mat-cell");
      colunas.push([celulas[0].textContent, celulas[1].textContent, celulas[2].textContent]);
    }

    // Adicionar dados à tabela do pop-up
    var tabela = document.querySelector("#containerPrincipal > div > app-emissao-dar-iptu > shared-page > shared-page-content > div > mat-card > mat-card-content > shared-responsive-selector > res-desktop > div > mat-table");
    for (var i = 0; i < colunas.length; i++) {
      var linha = document.createElement("mat-row");
      var coluna1 = document.createElement("mat-cell");
      coluna1.textContent = colunas[i][0];
      linha.appendChild(coluna1);
      var coluna2 = document.createElement("mat-cell");
      coluna2.textContent = colunas[i][1];
      linha.appendChild(coluna2);
      var coluna3 = document.createElement("mat-cell");
      coluna3.textContent = colunas[i][2];
      linha.appendChild(coluna3);
      tabela.appendChild(linha);
    }
  } else {
    console.error("Não foi possível encontrar a tabela na página");
  }
  
  // Adicione um event listener para todos os botões com a classe "download-button"
var downloadButtons = document.getElementsByClassName("mat-focus-indicator mat-raised-button mat-button-base mat-accent");
for (var i = 0; i < downloadButtons.length; i++) {
  downloadButtons[i].addEventListener("click", downloadFile);
}

function downloadFile(event) {
  // Obtenha o elemento do botão clicado
  var pdfButton = event.target;

  // Obtenha a URL do arquivo
  var fileUrl = pdfButton.getAttribute("href");

  // Verifique se a URL foi obtida com sucesso
  if (!fileUrl) {
    console.error("Não foi possível obter a URL do arquivo");
    return;
  }

  // Baixe o arquivo
  var link = document.createElement("a");
  link.href = fileUrl;
  link.download = "Boleto";
  link.click();
}
  
  

});
