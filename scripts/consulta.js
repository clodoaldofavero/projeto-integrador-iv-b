function gerarDadosEstaticos() {
    var nomeCidade = $('#consulta-cidade').val();
    var bandeira = 'Laranja';
    var casosConfirmados = 3386;
    var obitos = 109;
    var recuperados = 3112;
    var taxaMortalidade = ((obitos/casosConfirmados)*100).toFixed(2);
    var taxaRecuperados = ((recuperados/casosConfirmados)*100).toFixed(2);

    
    $('.bandeira h3').html(bandeira);
    
    var dados = '<div class="nomeCidade"><h2>' + nomeCidade + '</h2></div>' +
    '<div class="bandeira"><h3>Bandeira ' + bandeira + '</h3></div>' + 
    '<div class="leftText dados">' +
    '<p>Casos confirmados: ' + casosConfirmados + '</p>' +
    '<p>Óbitos: ' + obitos + '</p>' +
    '<p>Recuperados: ' + recuperados + '</p>' +
    '<p>Taxa de mortalidade: ' + taxaMortalidade + '%</p>' +
    '<p>Taxa de recuperados: ' + taxaRecuperados + '%</p>' +
    '</div>'
    
    if (nomeCidade) {
        $('.nomeCidade h2').text(nomeCidade);
        $('.bandeira h3').text(bandeira);
        $('#casos-confirmados').text('Casos confirmados: ' + casosConfirmados);
        $('#obitos').text('Óbitos: ' + obitos);
        $('#recuperados').text('Recuperados: ' + recuperados);
        $('#taxa-mortalidade').text('Taxa de mortalidade: ' + taxaMortalidade + '%');
        $('#taxa-recuperados').text('Taxa de recuperados: ' + taxaRecuperados + '%');
    } else {
        alert('Informe uma cidade!');
    }
}