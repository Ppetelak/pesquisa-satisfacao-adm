function doGet (e) {
    return HtmlService.createHtmlOutput('solicitação recebida');
  }
  
  function doPost (e) {
  
    if(typeof e !== 'undefined')
    var parametros = e.parameter;
    var planilha = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('dados');
  
    var ultimaLinha = Math.max(planilha.getLastRow(), 1);
  
    var linhaAtual = ultimaLinha + 1;
  
    planilha.insertRowAfter(ultimaLinha);
  
    var dataAtual = new Date() // variável para pegar a data de preemnchimento de um form ou no caso da criação de uma nova linha na planilha
  
    var q1 = parametros['q1']; //inserir o label usado no elementor pelo campo específico
    var q2 = parametros['q2'];
    var q3 = parametros['q3'];
    var q4 = parametros['q4'];
    var q5 = parametros['q5'];
    var q6 = parametros['q6'];
    var q7 = parametros['q7'];
    var q8 = parametros['q8'];
    var nome = parametros['nome']
  
  
    planilha.getRange(linhaAtual, 1).setValue(dataAtual)
    planilha.getRange(linhaAtual, 2).setValue(q1);
    planilha.getRange(linhaAtual, 3).setValue(q2);
    planilha.getRange(linhaAtual, 4).setValue(q3);
    planilha.getRange(linhaAtual, 5).setValue(q4);
    planilha.getRange(linhaAtual, 6).setValue(q5);
    planilha.getRange(linhaAtual, 7).setValue(q6);
    planilha.getRange(linhaAtual, 8).setValue(q7);
    planilha.getRange(linhaAtual, 9).setValue(q8);
    planilha.getRange(linhaAtual, 10).setValue(nome);
  
    SpreadsheetApp.flush();
  
    return ContentService.createTextOutput('{"status": "success"}')
        .setMimeType(ContentService.MimeType.JSON);
  
  }
  
  /*
      Após a criação do app script dentro do google publica-lo e aceitar o suo permitindo a conexão com sua conta
      ou seja fazer a autorização.
  */